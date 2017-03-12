# minimal-node-web-server
> Containerized Minimal Node Web Server -- Perfect for $5 month micro instances

Pull the Docker Image [![](https://images.microbadger.com/badges/version/duluca/minimal-node-web-server.svg)](https://microbadger.com/images/duluca/minimal-node-web-server "Get your own version badge on microbadger.com") `docker pull duluca/minimal-node-web-server`

## Quick Start
See https://github.com/duluca/angular1.5-starter project as an example of how to use this container with your own front-end project.

## Why Should You Use This Image?
A simple Express.js server to serve web content from the public folder. Alpine Linux is utilized to achieve absolute minimal memory footprint (~25mb).

This is will work great, if all you're doing is serving static content. If you intend to run a full-stack Node.js application, then your mileage may vary for intense and highly sensitive workloads.

## How To Use This Image?
You can fork it, modify it and go on your merry way. However, the intent is to even avoid that. Using the source code for this image as example, you can containirize your front-end application and with Docker Compose you can add this image as a dependency and host your Single Page Application (SPA) in its own container.

In any case, my recommendation would be to host your front-end and back-end code in seperate containers. This is in the spirit of a micro-services architecture. In addition, this approach physically enforces a seperation of concerns that is usually only implemented logically.

## New to Docker?
I intentionally kept the code simple and easy to read. It would be great exercise for you to understand how it exactly works end to end.

Read more about what Docker is, why it's important and how you can benefit from it [here](https://gist.github.com/duluca/25de70e41347f38b2283ef90ed69840a).

## How to Build, Run and Publish
There are three scripts in `package.json`
- `npm run image:build` will rebuild the Docker image with any changes
- `npm run image:run` will run the Docker image locally without having to publish it first
- `npm run image:publish` will publish the image to http://hub.docker.com

## Resources
The environment is configured following best practices from [NodeSource](https://nodesource.com/blog/8-protips-to-start-killing-it-when-dockerizing-node-js/).

If you're interested in more advanced Node.js containers I recommend checking out official NodeSource containers.
