import { MainLayout } from '../components/templates/MainLayout'
import { HeroSection } from '../components/organisms/HeroSection'
import { ProfileSection } from '../components/organisms/ProfileSection'
import { JourneySection } from '../components/organisms/JourneySection'
import { StatsSection } from '../components/organisms/StatsSection'
import { SkillsSection } from '../components/organisms/SkillsSection'
import { ExperienceSection } from '../components/organisms/ExperienceSection'
import { ProjectsSection } from '../components/organisms/ProjectsSection'
import { CertificationsSection } from '../components/organisms/CertificationsSection'
import { ContactSection } from '../components/organisms/ContactSection'
import { Footer } from '../components/organisms/Footer'

export function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ProfileSection />
      <JourneySection />
      <StatsSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </MainLayout>
  )
}
