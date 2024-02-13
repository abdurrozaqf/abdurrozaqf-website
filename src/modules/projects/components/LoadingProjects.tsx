import React from "react";
import SkeletonProjectCard from "./SkeletonProjectCard";

export default function LoadingProjects() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <SkeletonProjectCard key={index} />
      ))}
    </>
  );
}
