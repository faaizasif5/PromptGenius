"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setPost,clearPost } from "@app/redux/features/createPrompt";
import { createPromptAsync } from "@services/createApi";
import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.createPrompt.post);
  const submitting = useSelector((state) => state.createPrompt.status === "loading");
  const createPrompt = async (e) => {
    e.preventDefault();
    dispatch(createPromptAsync({ prompt: post.prompt, userId: session?.user.id, tag: post.tag }))
      .then((result) => {
        if (createPromptAsync.fulfilled.match(result)) {
          router.push("/");
        }
      });
      dispatch(clearPost());
  };
  

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;