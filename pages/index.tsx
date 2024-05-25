import type { NextPage } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import InputField from "@/components/forms/input-field";
import rules from "@/utils/form-validation";
import normalize from "@/utils/normalize";

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
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm<FormInputs>({});

  const onSubmit: SubmitHandler<FormInputs> = async (inputs) => {
    // alert(JSON.stringify(inputs))
    let {name, amount} = inputs;
    
    try {
      const formSubmit = await fetch(`/api/formSubmit`, {
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(inputs)
      });

      const formSubmitResponse = await formSubmit.json();
      if (formSubmitResponse) {
        alert('Submission successful')
      } else{
        alert('Submission failed')
      }


    } catch (error: any) {
      alert(`Submission failed with error: ${error}`);
    }

  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="POC Form submission to PowerAutomate"
                className="text-base font-normal mr-4"
              >
                POC Form submission to PowerAutomate
              </label>
            </div>
            <div>
              <div>
                <label htmlFor="name" className="text-base font-normal mr-4">
                  Name
                </label>
              </div>
              <div>
                <Controller
                  name="name"
                  control={control}
                  rules={rules.name}
                  render={({ field }) => (
                    <InputField
                      type="text"
                      field={field}
                      minLength={60}
                      onChange={(e: any) => {
                        normalize.alphabetOnly(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                {errors.name && "Name is required"}
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="amount" className="text-base font-normal mr-4">
                  Amount
                </label>
              </div>
              <div>
                <Controller
                  name="amount"
                  control={control}
                  rules={rules.amountOnly}
                  render={({ field }) => (
                    <InputField
                      type="text"
                      field={field}
                      minLength={60}
                      onChange={(e: any) => {
                        normalize.numberOnly(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                {errors.name && "Amount is required"}
              </div>
            </div>
            <div>
              <input type="submit" /> 
            </div>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
