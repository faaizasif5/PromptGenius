"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setPost } from "@app/redux/features/updatePrompt";
import { fetchPrompt,updatePromptData } from "@services/updateApis";
import Form from "@components/Form";
import { useDispatch, useSelector } from "react-redux";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const post = useSelector(state => state.updateprompt.post);
  const [submitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPromptDetails = async () => {
      dispatch(fetchPrompt(promptId));
    };
  
    if (promptId) getPromptDetails();
  }, [promptId, dispatch]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");
    const postData = {
      prompt: post.prompt,
      tag: post.tag
    };
    dispatch(updatePromptData({promptId,postData}))
    .then(() => {
      router.push('/');
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;