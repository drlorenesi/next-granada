import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Typography Showcase
      </h1>
      <p className="text-xl text-muted-foreground">
        This page demonstrates the various text types available in shadcn/ui.
      </p>

      <Separator className="my-6" />

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Headings</h2>

        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Heading 1
          </h1>
          <p className="text-sm text-muted-foreground">
            Font size: 4xl (desktop: 5xl), Font weight: extrabold
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Heading 2
          </h2>
          <p className="text-sm text-muted-foreground">
            Font size: 3xl, Font weight: semibold, Bottom border
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Heading 3
          </h3>
          <p className="text-sm text-muted-foreground">
            Font size: 2xl, Font weight: semibold
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Heading 4
          </h4>
          <p className="text-sm text-muted-foreground">
            Font size: xl, Font weight: semibold
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Paragraphs and Inline Text
        </h2>

        <div className="space-y-2">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This is a standard paragraph. The quick brown fox jumps over the
            lazy dog.
          </p>
          <p className="text-sm text-muted-foreground">
            Standard paragraph style
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold">This is large text.</p>
          <p className="text-sm text-muted-foreground">
            Font size: lg, Font weight: semibold
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium leading-none">
            This is small text.
          </p>
          <p className="text-sm text-muted-foreground">
            Font size: sm, Font weight: medium, No line height
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">This is muted text.</p>
          <p className="text-sm text-muted-foreground">
            Uses muted-foreground color
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Lists</h2>

        <div>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Unordered list with disc style
          </p>
        </div>

        <div>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
          <p className="text-sm text-muted-foreground">
            Ordered list with decimal style
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Inline Elements</h2>

        <div className="space-y-2">
          <p className="leading-7">
            This paragraph contains{" "}
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              a link
            </a>
            ,<strong className="font-semibold"> strong text</strong>, and{" "}
            <em>emphasized text</em>.
          </p>
          <p className="text-sm text-muted-foreground">
            Demonstrates inline link, strong, and em styles
          </p>
        </div>

        <div className="space-y-2">
          <p className="leading-7">
            You can also use{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              inline code
            </code>{" "}
            within text.
          </p>
          <p className="text-sm text-muted-foreground">
            Demonstrates inline code style
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Blockquote</h2>

        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;The best way to predict the future is to invent it.&quot; - Alan
          Kay
        </blockquote>
        <p className="text-sm text-muted-foreground">
          Blockquote with left border and italic text
        </p>
      </section>

      <div className="mt-8">
        <Button>Example Button</Button>
      </div>
    </div>
  );
}
