import {
  component,
  defineTheme,
  directory,
  group,
  link,
  separator,
  site,
  type SiteComponent,
} from "@neato/guider/theme";
import { Logo } from "./components/Logo";

const magickDocsTemplate = site("magick-docs", {
  // dropdown: [
  //   link("Documentation", "/Intro/what-is-magick", { icon: "fa6-solid:book" }),
  //   link("API Reference", "/nodes"),
  // ],
  settings: {
    colors: {
      primary: "#1bc5eb",
      primaryDarker: "#15a9c7",
      primaryLighter: "#4dd3f0",
    },
    backgroundPattern: "flare",
    logo: () => <Logo />,
  },
  // settings: {
  //   colors: {
  //     primary: "#A880FF",
  //     primaryDarker: "#6C3DD0",
  //     primaryLighter: "#D0BAFF",
  //   },
  //   backgroundPattern: "flare",
  //   // logo: () => <Logo />,
  // },
  navigation: [
    link("Support", "mailto:tech@magickml.com"),
    link("Try Now", "https:/www.magickml.com/"),
  ],
  github: "Oneirocom/Magick", // Replace with actual GitHub repository
});

export default defineTheme([
  site("magick-docs", {
    extends: [magickDocsTemplate],
    meta: () => (
      <>
        <link rel="icon" href="/images/favicon.ico" />
      </>
    ),
    contentFooter: {
      socials: [
        { type: "twitter", url: "https://x.com/MagickML" },
        { type: "github", url: "https://github.com/Oneirocom/Magick" },
        { type: "discord", url: "https://discord.gg/8WkayXw8a4" },
      ],
      text: "Copyright © 2023 Oneirocom Systems Inc.",
      editRepositoryBase: "https://github.com/your-github-org/magick-docs", // Replace with actual docs repository
    },
    pageFooter: {
      text: "Made with Magick",
    },
    directories: [
      directory("docs", {
        sidebar: [
          group("Introduction", [
            link("Welcome", "/Intro/welcome"),
            link("What is Magick", "/Intro/what-is-magick"),
            link("Features", "/Intro/features"),
            link("What is an Agent", "/Intro/what-is-an-agent"),
            link("What is a Spell", "/Intro/what-is-a-spell"),
            link("Nodes", "/Intro/nodes"),
            link("AIDE Interface Overview", "/Intro/AIDE-interface-overview"),
            link("The Magick Engine", "/Intro/the-magick-engine"),
            link("Channels", "/Intro/channels"),
          ]),
          group("Getting Started", [
            link("Create an Account", "/getting-started/create-an-account"),
            link("Create an Agent", "/getting-started/create-an-agent"),
            link("Create a Spell", "/getting-started/create-a-spell"),
          ]),
          // group("Working with Magick", [
          //   link(
          //     "Event-Driven Architecture",
          //     "/working-with-magick/event-driven-architecture"
          //   ),
          //   link(
          //     "Working with Nodes",
          //     "/working-with-magick/working-with-nodes"
          //   ),
          // ]),
          group("Features", [
            link("Plugins", "/plugins/plugins"),
            link("Discord", "/plugins/discord"),
            link("Slack", "/plugins/slack"),
            link("Events", "/features/events/events"),
          ]),
          separator(),
          group("Nodes", [
            link.nested("Action Nodes", [
              link("Array - Clear", "/nodes/action/array/clear"),
              link("Array - Create", "/nodes/action/array/create"),
              link("Json - Stringify", "/nodes/action/json/stringify"),
              link("Knowledge - Add", "/nodes/action/knowledge/add"),
              link("Knowledge - Query", "/nodes/action/knowledge/query"),
              link("Knowledge - Search", "/nodes/action/knowledge/search"),
              link(
                "Knowledge - SearchMany",
                "/nodes/action/knowledge/searchMany"
              ),
              link("Object - Create", "/nodes/action/object/create"),
              link("Http - Fetch", "/nodes/actions/http/fetch"),
              link("Agent - Get Secret", "/nodes/agent/getSecret"),
              link("Agent - Get State", "/nodes/agent/getState"),
              link("CustomEvent - Trigger", "/nodes/customEvent/trigger"),
              link("Debug - Expect True", "/nodes/debug/expectTrue"),
              link("Debug - Log", "/nodes/debug/log"),
              link("Debug - Log Array", "/nodes/debug/log/array"),
              link("Debug - Log Object", "/nodes/debug/log/object"),
              link("Discord - Send Message", "/nodes/discord/sendMessage"),
              link("Magick - Generate Text", "/nodes/magick/generateText"),
              link("Magick - Send Message", "/nodes/magick/sendMessage"),
              link("Magick - Stream Message", "/nodes/magick/streamMessage"),
              link("Slack - Send Audio", "/nodes/slack/sendAudio"),
              link("Slack - Send Image", "/nodes/slack/sendImage"),
              link("Slack - Send Message", "/nodes/slack/sendMessage"),
            ]),
            link.nested("Logic Nodes", [
              link("Array Overview", "/nodes/logic/array"),
              link("Array - Length", "/nodes/logic/array/length"),
              link("Array - Merge", "/nodes/logic/array/merge"),
              link("Array - Push", "/nodes/logic/array/push"),
              link("Array - Remove First", "/nodes/logic/array/removeFirst"),
              link("Array - Remove Last", "/nodes/logic/array/removeLast"),
              link("AssocPath - Object", "/nodes/logic/assocPath/object"),
              link("Concat - Array 2", "/nodes/logic/concat/array/2"),
              link("Concat - Array 3", "/nodes/logic/concat/array/3"),
              link("Concat - String", "/nodes/logic/concat/string"),
              link("Equal - Array", "/nodes/logic/equal/array"),
              link("Equal - Object", "/nodes/logic/equal/object"),
              link("Includes - String", "/nodes/logic/includes/string"),
              link("Length - String", "/nodes/logic/length/string"),
              link("MergeDeep - Object", "/nodes/logic/mergeDeep/object"),
              link("Object Overview", "/nodes/logic/object"),
              link("Object - Destructure", "/nodes/logic/object/destructure"),
              link("Path - Integer", "/nodes/logic/path/integer"),
              link("Path - Object", "/nodes/logic/path/object"),
              link("Path - String", "/nodes/logic/path/string"),
              link("Split - String", "/nodes/logic/split/string"),
              link("String Overview", "/nodes/logic/string"),
              link("String - Match", "/nodes/logic/string/match"),
              link("String - Template", "/nodes/logic/string/template"),
              link("Validate - Object", "/nodes/logic/validate/object"),
            ]),
            link.nested("Flow Nodes", [
              link("Array - ForEach", "/nodes/flow/array/forEach"),
              link("Branch", "/nodes/flow/branch"),
              link("Counter", "/nodes/flow/counter"),
              link("Debounce", "/nodes/flow/debounce"),
              link("Do N", "/nodes/flow/doN"),
              link("Do Once", "/nodes/flow/doOnce"),
              link("Flip Flop", "/nodes/flow/flipFlop"),
              link("For Loop", "/nodes/flow/forLoop"),
              link("Gate", "/nodes/flow/gate"),
              link("Multi Gate", "/nodes/flow/multiGate"),
              link("Sequence", "/nodes/flow/sequence"),
              link("Switch - Integer", "/nodes/flow/switch/integer"),
              link("Switch - String", "/nodes/flow/switch/string"),
              link("Throttle", "/nodes/flow/throttle"),
              link("Wait All", "/nodes/flow/waitAll"),
              link("While Loop", "/nodes/flow/whileLoop"),
            ]),
            link.nested("Time Nodes", [
              link("Delay", "/nodes/flow/delay"),
              link("Now", "/nodes/time/now"),
            ]),
            link.nested("Query Nodes", [
              link("Variables - Get", "/nodes/variables/get"),
              link("Variables - Set", "/nodes/variables/set"),
            ]),
          ]),
        ],
      }),
    ],
  }),
]) satisfies SiteComponent[];
