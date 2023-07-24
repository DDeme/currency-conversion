import {
  ConversionStats,
  ConversionStatsSkeleton,
} from "@/components/conversion-stats";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header/Header";
import { AppContainer } from "@/components/app-container";
import { Conversion } from "@/components/conversion";
import { Card } from "@/components/card";
import { Statistics } from "@/components/statistics";

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <Card>
        <Conversion />
      </Card>
      <Card>
        <Statistics />
      </Card>
      <Footer />
    </AppContainer>
  );
}
