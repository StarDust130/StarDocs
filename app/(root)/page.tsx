import Header from "@/components/elements/Header";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="home-container">
      <Header className="sticky left-0 right-0">
        Hello 🔔
        <Button>Click Me</Button>
      </Header>
    </main>
  );
}
