import { codeToHtml } from "shiki";
import type { BuiltinLanguage } from "shiki";

interface CodeRendererProps {
  code: string;
  lang: BuiltinLanguage;
}

export const CodeRenderer = async ({
  code,
  lang = "tsx",
}: CodeRendererProps) => {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark-default",
  });

  return (
    <div className="font-medium text-sm">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
