import type { NextPage } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import InputField from "@/components/forms/input-field";
const inter = Inter({ subsets: ["latin"] });

type FormInputs = {
  name: string;
  amount: string;
};

type IndexPageProps = {
  APP_ENV: string;
};

const Home: NextPage<IndexPageProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
    reset,
    setValue
  } = useForm<FormInputs>({});

  const onSubmit: SubmitHandler<FormInputs> = async (inputs) => {

  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.tsx</code>
        </p>
        {/* POC Form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}>

          </form>

        </div>
      </div>
    </main>
  );
};

export default Home;
