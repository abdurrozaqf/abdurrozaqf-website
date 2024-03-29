import Contributions from "./Contributions";

interface DashboardProps {
  githubData: any;
}

export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <>
      <Contributions githubData={githubData} />
    </>
  );
}
