import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Markdown } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module).add("basic", () => (
  <Markdown>
    <div>
      <h1>Curabitur blandit tempus porttitor</h1>
      <h2>
        Donec id elit non mi porta gravida at eget metus. Nulla vitae elit
        libero, a pharetra augue.
      </h2>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
        elit non mi porta gravida at eget metus. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus
        mollis interdum. Donec sed odio dui. Cras mattis consectetur purus sit
        amet fermentum.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
        magna mollis euismod. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Nulla vitae elit libero, a
        pharetra augue.
      </p>
      <ol>
        <li>
          <p>Magna Vulputate Sit Consectetur Mattis</p>
        </li>
        <li>
          <p>Vestibulum id ligula porta felis euismod semper.</p>
        </li>
        <li>
          <p>Aenean lacinia bibendum nulla sed consectetur.</p>
        </li>
        <li>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum fauci.</p>
        </li>
        <li>
          <p>Maecenas faucibus mullis interdum. Nisi erat porttitor ligula, </p>
        </li>
      </ol>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
        magna mollis euismod. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Nulla vitae elit libero, a
        pharetra augue.
      </p>
      <blockquote>
        <p>
          Tonight I will not eat after 9pm. I will not drink champagne and
          instead drink water to hydrate. I will keep my wind down schedule
          which means i will shut off all devices at 9. Watch a happy tv show or
          read some of my book. write a todo list for tomorrow and meditate for
          10 minutes before I go to bed.
        </p>
        <p>
          Tonight I will not eat after 9pm. I will not drink champagne and
          instead drink water to hydrate. I will keep my wind down schedule
          which means i will shut off all devices at 9. Watch a happy tv show or
          read some of my book. write a todo list for tomorrow and meditate for
          10 minutes before I go to bed.
        </p>
      </blockquote>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
        magna mollis euismod. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Nulla vitae elit libero, a
        pharetra augue.
      </p>
      <ul>
        <li>
          <p>Magna Vulputate Sit Consectetur Mattis</p>
        </li>
        <li>
          <p>Vestibulum id ligula porta felis euismod semper.</p>
        </li>
        <li>
          <p>Aenean lacinia bibendum nulla sed consectetur.</p>
        </li>
        <li>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum fauci.</p>
        </li>
        <li>
          <p>Maecenas faucibus mullis interdum. Nisi erat porttitor ligula, </p>
        </li>
      </ul>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
        magna mollis euismod. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Nulla vitae elit libero, a
        pharetra augue.
      </p>
      <h2>
        Donec id elit non mi porta gravida at eget metus. Nulla vitae elit
        libero, a pharetra augue.
      </h2>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
        elit non mi porta gravida at eget metus. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus
        mollis interdum. Donec sed odio dui. Cras mattis consectetur purus sit
        amet fermentum.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
        magna mollis euismod. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Nulla vitae elit libero, a
        pharetra augue.
      </p>
    </div>
  </Markdown>
));
