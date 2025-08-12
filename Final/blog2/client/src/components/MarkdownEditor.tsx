import {
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  toolbarPlugin,
  codeMirrorPlugin,
  codeBlockPlugin,
  listsPlugin,
  headingsPlugin,
  ListsToggle,
  ConditionalContents,
  InsertCodeBlock,
  ChangeCodeMirrorLanguage,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useCallback } from "react";

interface MarkdownEditorProps {
  readOnly: boolean;
  markdown?: string;
  mdRef?: React.RefObject<MDXEditorMethods | null>;
}

/// @markdown parameter can only be set on first load, subsequent sets are ignored by MDXEditor!
export function MarkdownEditor({
  mdRef,
  markdown,
  readOnly,
}: MarkdownEditorProps) {
  const setEditorValue = useCallback((markdownStr: string) => {
    console.log("MDXEditor updated value:", markdownStr);
  }, []);

  return (
    <MDXEditor
      className="mdx-container"
      ref={mdRef}
      markdown={markdown || ""}
      readOnly={readOnly}
      onChange={setEditorValue}
      plugins={readOnly ? ReadonlyPlugins : WritePlugins}
    />
  );
}

const ReadonlyPlugins = [
  codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      c: "C",
      cplusplus: "C++",
      csharp: "C#",
      css: "CSS",
      erlang: "Erlang",
      go: "Go",
      groovy: "Groovy",
      haskell: "Haskell",
      html: "HTML",
      java: "Java",
      js: "Javascript",
      lua: "Lua",
      python: "Python",
      r: "R",
      ruby: "Ruby",
      sass: "SASS",
      scala: "Scala",
      smalltalk: "Smalltalk",
      sql: "SQL",
      ts: "Typescript",
    },
  }),
  listsPlugin(),
  headingsPlugin(),
];

const WritePlugins = [
  codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      c: "C",
      cplusplus: "C++",
      csharp: "C#",
      css: "CSS",
      erlang: "Erlang",
      go: "Go",
      groovy: "Groovy",
      haskell: "Haskell",
      html: "HTML",
      java: "Java",
      js: "Javascript",
      lua: "Lua",
      python: "Python",
      r: "R",
      ruby: "Ruby",
      sass: "SASS",
      scala: "Scala",
      smalltalk: "Smalltalk",
      sql: "SQL",
      ts: "Typescript",
    },
  }),
  listsPlugin(),
  headingsPlugin(),
  toolbarPlugin({
    toolbarContents: () => (
      <>
        {" "}
        <BlockTypeSelect />
        <UndoRedo />
        <BoldItalicUnderlineToggles />
        <ListsToggle />
        <ConditionalContents
          options={[
            {
              when: (editor) => editor?.editorType === "codeblock",
              contents: () => <ChangeCodeMirrorLanguage />,
            },
            {
              fallback: () => (
                <>
                  <InsertCodeBlock />
                </>
              ),
            },
          ]}
        />
      </>
    ),
  }),
];
