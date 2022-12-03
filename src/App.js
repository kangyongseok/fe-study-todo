import { useState } from '../core/hooks.js';
import { selector } from './utils/common.js';
import Container from './components/Container'

function App({ $target }) {
  $target.innerHTML = `
    <h1 class="title">10일 (목)</h1>
    <section class="content_wrap">
      <div class="container todo_wrap">
        ${Container({ key: 'todo' })}
      </div>
      <div class="container process_wrap">
        ${Container({ key: 'process' })}
      </div>
      <div class="container done_wrap">
        ${Container({ key: 'done' })}
      </div>
    </section>
  `
}

export default App;