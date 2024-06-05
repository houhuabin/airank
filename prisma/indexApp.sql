-- 添加 tsvector 类型的列
ALTER TABLE "App"
ADD COLUMN "textsearchable_index_col" tsvector;

-- 更新列以包含 'title' 和 'description' 字段的向量
UPDATE "App"
SET "textsearchable_index_col" = to_tsvector('english', coalesce("title", '') || ' ' || coalesce("description", ''));

-- 创建触发器函数以自动更新向量
CREATE OR REPLACE FUNCTION app_tsvector_update_trigger() RETURNS trigger AS $$
begin
  new."textsearchable_index_col" := to_tsvector('english', coalesce(new."title", '') || ' ' || coalesce(new."description", ''));
  return new;
end
$$ LANGUAGE plpgsql;

-- 将触发器与表关联
CREATE TRIGGER tsvectorupdate BEFORE INSERT OR UPDATE
ON "App" FOR EACH ROW EXECUTE FUNCTION app_tsvector_update_trigger();

-- 为 tsvector 列创建 GIN 索引
CREATE INDEX textsearch_idx ON "App" USING GIN ("textsearchable_index_col");
