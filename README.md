# CheapSpot

## Project organization and file colocation (NEXT)

<https://nextjs.org/docs/app/building-your-application/routing/colocation>

Apart from routing folders and files, Next.js is unopinionated about how you organize you folders and files.

For uniformity and easy working around in this project, below are the rules that govern this project's organization.

`NB: This CheapSpot uses App router`

1. File names must be in lower case and words must be separated with `-` not `_` or `a space`.
2. All folders that holds UI logic or any other data that is not routable should be made private by prefixing its name with an underscore.
3. Use module path aliases whenever possible.
4. Put all components inside the `_components` folder, all api and functions insde `_lib` folder and styles inside the `_styles` folder. (globals.css) is an exception.
5. Component specific styles can be placed within the component's foler.
