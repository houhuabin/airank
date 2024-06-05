import React from "react";
import dynamic from "next/dynamic";

import AppFormSkeleton from "./loading";
const AppForm = dynamic(() => import("@/app/apps/_components/AppForm"), {
  ssr: false,
  loading: () => <AppFormSkeleton />,
});
const NewAppPage = () => {
  return <AppForm />;
};

export default NewAppPage;
