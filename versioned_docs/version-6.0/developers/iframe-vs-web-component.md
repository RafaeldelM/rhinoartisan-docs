---
description: >-
  The RhinoArtisan Web 3D can be integrated either via an iframe or as a Web
  Component. Each approach serves different use cases.
---

# iframe vs Web Component

#### iframe integration

An iframe loads the viewer as a fully independent application inside your page.

Characteristics:

* Complete isolation from the host application
* No shared JavaScript or CSS context
* Very easy to integrate
* No build or dependency conflicts
* Works in any framework or CMS

Recommended when:

* You want a quick and safe integration
* The viewer is hosted externally
* You don’t need direct access to the viewer’s internal API
* You are integrating into CMSs or documentation platforms (e.g. GitBook)

Limitations:

* Limited direct interaction with the viewer
* Communication requires URL parameters or postMessage
* Styling is isolated and cannot be overridden

***

#### Web Component integration

A Web Component integrates the viewer directly into your application as a custom HTML element.

Characteristics:

* Runs in the same DOM as your application
* Direct access to properties, methods and events
* No iframe boundary
* Framework-agnostic (Angular, Vue, React, etc.)
* Can be controlled programmatically

Recommended when:

* You need deeper interaction with the viewer
* The viewer must react to application state changes
* You want to control the viewer from your code
* You are building a custom UI around the viewer

Limitations:

* Requires loading the viewer’s JS bundle
* Shares the execution context with your app
* Slightly more setup compared to iframe

***

#### Comparison summary

| Feature                    | iframe    | Web Component |
| -------------------------- | --------- | ------------- |
| Integration speed          | Very fast | Fast          |
| Framework compatibility    | Universal | Universal     |
| Isolation                  | Full      | None          |
| Programmatic control       | Limited   | Full          |
| Styling control            | No        | Yes           |
| Recommended for CMS / docs | Yes       | No            |

***

#### Recommendation

* Use **iframe** for simple, robust and low-maintenance integrations.
* Use **Web Component** for advanced integrations and custom workflows.

Both options are officially supported and can be combined depending on the use case
