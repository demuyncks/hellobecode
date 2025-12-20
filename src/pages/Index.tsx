import HeroSection from '@/components/sections/HeroSection';
import Scene1Beginning from '@/components/sections/Scene1Beginning';
import Scene2Graduation from '@/components/sections/Scene2Graduation';
import Scene3Experimentation from '@/components/sections/Scene3Experimentation';
import Scene4Focus from '@/components/sections/Scene4Focus';
import Scene5Revelation from '@/components/sections/Scene5Revelation';
import Scene6Determination from '@/components/sections/Scene6Determination';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <Scene1Beginning />
      <Scene2Graduation />
      <Scene3Experimentation />
      <Scene4Focus />
      <Scene5Revelation />
      <Scene6Determination />
    </main>
  );
};

export default Index;
