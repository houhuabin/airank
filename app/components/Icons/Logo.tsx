import Image from "next/image";
export default function Logo() {
  return (
    <Image
      src="/images/logo.png" // 相对于 public 文件夹的路径
      alt="AI Rank"
      width={172} // 设定图片的宽度
      height={26} // 设定图片的高度
    />
  );
}
