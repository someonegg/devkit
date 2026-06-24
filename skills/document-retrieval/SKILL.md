---
name: document-retrieval
description: Delegate focused retrieval to the document-retriever subagent only when long or numerous explicitly provided documents or URLs need source-located matches without loading full source context into the main task.
---

# Document Retrieval

Use this skill when the current workflow needs to locate content inside explicitly provided documents without pulling the full document context into the main task.

This skill is a dispatch rule, not a document parser. It tells the main agent when and how to delegate to the `document-retriever` subagent.

## When To Use

Delegate to `document-retriever` when at least one condition applies:

- The user or task provides a PDF, doc, Markdown, HTML, long text document, or URL and asks for a specific passage, fact, clause, table, definition, or section.
- The source is long enough that reading it directly would pollute the main context.
- The next step needs source locations, snippets, headings, page numbers, match reasons, or retrieval gaps.
- Several provided sources must be searched before the main workflow can continue.

## When Not To Use

Do not delegate when:

- The source is a short document that can be read directly with low context cost.
- The task is a simple source-name or exact string search that the main agent can answer with a quick tool call.
- The source set is not provided and the task requires open-ended research.
- The main task requires interpreting, deciding, rewriting, or implementing after retrieval; keep those responsibilities with the main agent.

## Delegation Contract

Send the subagent a bounded task with this structure:

```text
Question:
<what needs to be found>

Sources:
<explicit documents, URLs, or document ranges>

Constraints:
- Search only the listed sources.
- Return retrieval results only; do not continue the parent task.
```

## Boundary Rule

Treat the subagent result as retrieved material, not a final conclusion. The `document-retriever` subagent answers "what was found where?" The main agent decides whether the search is sufficient and what to do next.
