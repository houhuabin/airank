"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { appSchema, issueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import { Spinnaker } from "next/font/google";
import Spinner from "@/app/components/Spinner";

import { App, Issue } from "@prisma/client";
import { TagItem } from "@/app/components/CheckboxMultiple";
import { fetchHotTags } from "../uitls/prismaUtils";

type AppFormData = z.infer<typeof appSchema>;

const AppForm = ({ app }: { app?: App }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AppFormData>({
    resolver: zodResolver(appSchema),
  });

  const [backendValidationError, setBackendValidationError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      const selectedTags = tagItems
        .filter((item) => item.checked)
        .map((item) => item.id);
      const formData = {
        ...data,
        tags: selectedTags,
      };

      if (app) await axios.patch("/api/issues/" + app.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setBackendValidationError("An unexpected error occurred.");
    }
  });

  const [tagItems, setTagItems] = useState<TagItem[]>([]);
  useEffect(() => {
    // 获取热门标签并更新状态
    fetchHotTags().then((tags) => {
      const items = tags.map((tag) => ({
        id: tag.id.toString(),
        label: tag.name,
        checked: false, // 或根据需要调整为 true
      }));
      setTagItems(items);
    });
  }, []);

  return (
    <div className="max-w-2xl  ">
      <form id="newIssueForm" className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={app?.name}
            placeholder="Name"
            {...register("name")}
          ></TextField.Input>
        </TextField.Root>
        {<ErrorMessage>{errors.name?.message}</ErrorMessage>}

        <TextField.Root>
          <TextField.Input
            defaultValue={app?.title}
            placeholder="Title"
            {...register("title")}
          ></TextField.Input>
        </TextField.Root>
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}

        <Controller
          name="description"
          control={control}
          defaultValue={app?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
        {/*<ErrorMessage>{backendValidationError}</ErrorMessage>*/}
        <Button disabled={isSubmitting}>
          {app ? "Update App" : "Submit New App"} {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default AppForm;
