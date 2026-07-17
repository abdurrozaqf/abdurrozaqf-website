import React from "react";
import SkeletonProjectCard from "./skeleton-project-card";

export default function LoadingProjects() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <SkeletonProjectCard key={index} />
      ))}
    </>
  );
}
