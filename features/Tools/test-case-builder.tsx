"use client";

import { useState } from "react";
import data from "@/data/tools/data.json";

type Values = typeof data.sampleValues;
const empty: Values = { id: "", title: "", preconditions: "", steps: "", expected: "", priority: data.priorities[1] };

export function TestCaseBuilder() {
  const [values, setValues] = useState<Values>(empty);
  const [message, setMessage] = useState("");
  const valid = values.title.trim() && values.steps.trim() && values.expected.trim();
  const steps = values.steps.split("\n").map(s => s.trim()).filter(Boolean);
  const markdown = [
    "# " + (values.id.trim() ? values.id.trim() + " — " : "") + values.title.trim(),
    "", "**" + data.fields.priority + ":** " + values.priority,
    "", "## " + data.fields.preconditions, values.preconditions.trim(),
    "", "## " + data.fields.steps.split(" — ")[0], ...steps.map((step, i) => (i + 1) + ". " + step),
    "", "## " + data.fields.expected, values.expected.trim(),
  ].join("\n");
  async function copy() {
    if (!valid) { setMessage(data.invalid); return; }
    try { await navigator.clipboard.writeText(markdown); setMessage(data.copied); }
    catch { setMessage(data.copyError); }
  }
  function download() {
    if (!valid) { setMessage(data.invalid); return; }
    const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = (values.id.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 60) || "test-case") + ".md";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage(data.downloaded);
  }
  function update(key: keyof Values, value: string) { setValues(previous => ({ ...previous, [key]: value })); setMessage(""); }
  return <div className="tool-grid">
    <form className="tool-form" onSubmit={event => { event.preventDefault(); void copy(); }}>
      {(["id", "title", "preconditions", "steps", "expected"] as const).map(key => <label key={key} htmlFor={"case-" + key}>{data.fields[key]}
        {key === "id" || key === "title"
          ? <input id={"case-" + key} value={values[key]} onChange={event => update(key, event.target.value)} required={key === "title"} maxLength={200} />
          : <textarea id={"case-" + key} value={values[key]} onChange={event => update(key, event.target.value)} required={key !== "preconditions"} rows={key === "steps" ? 5 : 3} maxLength={10000} />}
      </label>)}
      <label htmlFor="case-priority">{data.fields.priority}<select id="case-priority" value={values.priority} onChange={event => update("priority", event.target.value)}>{data.priorities.map(priority => <option key={priority}>{priority}</option>)}</select></label>
      <div className="page-actions">
        <button className="button-primary" type="submit">{data.copy}</button>
        <button className="button-secondary" type="button" onClick={download}>{data.download}</button>
        <button className="button-secondary" type="button" onClick={() => { setValues(data.sampleValues); setMessage(data.loaded); }}>{data.sample}</button>
        <button className="button-secondary" type="button" onClick={() => { setValues(empty); setMessage(data.cleared); }}>{data.reset}</button>
      </div>
      <p role="status" className="tool-status">{message}</p>
    </form>
    <section className="tool-preview"><h2>{data.preview}</h2><pre>{Object.entries(values).some(([key, value]) => key !== "priority" && value.trim()) ? markdown : data.empty}</pre></section>
  </div>;
}
