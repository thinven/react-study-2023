import React from "react";

import Gallery from "./Gallery";

function ImportingAndExportingComponents() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Syntax</th>
            <th>Export statement</th>
            <th>Import statement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                export default function Button() {"{"}
                {"}"}
              </code>
            </td>
            <td>
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                import Button from './Button.js';
              </code>
            </td>
          </tr>
          <tr>
            <td>Named</td>
            <td>
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                export function Button() {"{"}
                {"}"}
              </code>
            </td>
            <td>
              <code
                dir="ltr"
                className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >
                import {"{"} Button {"}"} from './Button.js';
              </code>
            </td>
          </tr>
        </tbody>
      </table>

      <Gallery />
    </>
  );
}

export default ImportingAndExportingComponents;
