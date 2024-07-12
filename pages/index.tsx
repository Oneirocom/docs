import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
} from "@neato/guider/client";

const FeatureCard = ({ title, description }) => (
  <Card title={title}>
    <p className="text-sm">{description}</p>
  </Card>
);

const HeroBanner = () => (
  <div className="w-full bg-gray-200 mb-8 mt-10">
    <img
      src="/images/IDE-screenshot.png"
      alt="Magick AIDE"
      className="w-full h-full object-cover"
    />
  </div>
);

export default function MagickLandingPage() {
  return (
    <GuiderLayout meta={{ layout: "page" }}>
      <Hero>
        <Hero.Badge title="Open" to="/docs/magick/getting-started">
          Now in Beta!
        </Hero.Badge>
        <Hero.Title>Create AI Agents with Magick</Hero.Title>
        <Hero.Subtitle>
          Magick is a powerful visual IDE for programming and deploying AI
          Agents. Design, develop, and deploy intelligent agents with ease using
          our intuitive node-based interface.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/Intro/welcome">Documentation</Button>
          <Button to="https://github.com/Oneirocom/Magick" type="secondary">
            View on GitHub
          </Button>
        </Hero.Actions>
        <HeroBanner />
      </Hero>
      <CardGrid>
        <FeatureCard
          title="Open-Source Flexibility"
          description="Dive into a community-driven development experience. Contribute, customize, and extend Magick's capabilities. Benefit from continuous improvements and innovations from a passionate developer community."
        />
        <FeatureCard
          title="Platform Agnostic"
          description="Freedom to choose your preferred LLM. Seamlessly integrate and compare various models like GPT-4, Claude, or open-source alternatives. Optimize your AI's performance by selecting the best model for each task."
        />
        <FeatureCard
          title="Visual Node Builder"
          description="Transform complex AI logic into intuitive visual workflows. Drag, drop, and connect nodes to create sophisticated AI behaviors without writing a single line of code. Perfect for both beginners and experienced developers."
        />
        <FeatureCard
          title="Powerful Document Processing"
          description="Effortlessly handle and analyze complex documents and datasets. Extract insights, summarize content, and generate responses based on embedded knowledge. Ideal for building AI assistants with domain-specific expertise."
        />
        <FeatureCard
          title="Rapid-Prototyping"
          description="Accelerate your AI development cycle. Quickly test ideas, iterate on designs, and refine your agents' behavior in real-time. Turn concepts into functional prototypes in minutes, not days."
        />
        <FeatureCard
          title="Deep Customization"
          description="Tailor every aspect of your AI to meet specific requirements. Fine-tune models, create custom nodes, and design unique behaviors. Build AI solutions that perfectly align with your vision and business needs."
        />
        <FeatureCard
          title="User-Friendly Interface"
          description="Designed for accessibility without compromising on power. Whether you're a seasoned AI engineer or new to the field, Magick's intuitive interface makes AI development approachable and enjoyable for all skill levels."
        />
        <FeatureCard
          title="Real-Time & Event-Driven"
          description="Create responsive AI agents that react instantly to events and user interactions. Test and refine your agents' behavior in real-time within the AIDE, ensuring smooth and natural interactions in production."
        />
        <FeatureCard
          title="Scalable Deployment"
          description="Build once, scale effortlessly. Magick's architecture ensures your AI agents can handle growing user bases and increasing workloads. Deploy with confidence, knowing your solution can expand to meet demand."
        />
        <FeatureCard
          title="Multi-Platform Integrations"
          description="Seamlessly connect your AI agents to popular platforms and tools. From Discord bots to Unreal Engine NPCs, Google AI services to custom APIs, Magick empowers you to create AI that works across diverse ecosystems."
        />
        <FeatureCard
          title="Comprehensive Tooling"
          description="Everything you need for the full AI development lifecycle. From initial concept to final deployment, Magick provides a rich set of tools for building, testing, debugging, and monitoring your AI agents."
        />
        <FeatureCard
          title="Metered Billing"
          description="Fair and flexible pricing that scales with your success. Only pay for the resources you use, making it easy to start small and grow your AI projects organically. Transparent pricing ensures cost-effective development and deployment."
        />
      </CardGrid>
    </GuiderLayout>
  );
}
