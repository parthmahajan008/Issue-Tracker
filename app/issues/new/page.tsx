"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createIssueSchema } from "@/app/validationSchemas";
import Spinner from "@/components/spinner";

const NewIssuePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof createIssueSchema>>({
    resolver: zodResolver(createIssueSchema),
  });
  const [isSubmitting, setSubmitting] = useState("");
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof createIssueSchema>) {
    try {
      setSubmitting("true");
      await axios.post("/api/issues", values);
      router.push("/issues");
    } catch (error) {
      setSubmitting("false");
      console.error(error);
    }
    // console.log(values);
  }

  return (
    <div className="items-centre justify-center  max-w-xl mx-auto my-auto ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormDescription>Enter Title Here</FormDescription>
                <FormControl>
                  <Input placeholder="Title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormDescription>Enter Description Here</FormDescription>
                <FormControl>
                  <Input
                    placeholder="The Issue is Described as..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit {isSubmitting && <Spinner />}</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewIssuePage;
