export default { title: "Components/Form" };

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const Default = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <FormLabel
                  detail="본인을 제외한 인원 수를 입력해주세요"
                  required
                >
                  모집 인원
                </FormLabel>
                <FormControl>
                  <input placeholder="placholder" {...field} />
                </FormControl>
                <FormDescription>
                  Tip. 어느 카테고리에 토피케이션을 노출해야 잘맞는 토피넛을
                  만날 수 있을지 생각해봐요
                </FormDescription>
              </FormItem>
            );
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};
