"use client";

import { Demo, PHPBonesCommand } from "@components";
import { Marquee } from "@gfazioli/mantine-marquee";
import {
  Button,
  Center,
  Container,
  Flex,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconApi,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandWordpress,
  IconCode,
  IconDatabase,
  IconEyeStar,
  IconMenuDeep,
  IconPaperclip,
  IconRectangle,
  IconSettings2,
  IconTerminal,
} from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";
import NextImage from "next/image";
import { useEffect } from "react";
import { HomeCard } from "../HomeCard";
import ajaxImage from "./ajax.png";
import apiImage from "./api.png";
import consoleImage from "./console.png";
import controllerImage from "./controller.png";
import cptImage from "./cpt.png";
import dbImage from "./db.png";
import footer from "./footer-removebg.png";
import classes from "./HomeContent.module.css";
import logsImage from "./logs.png";
import menuImage from "./menu.png";
import migrationImage from "./migration.png";
import optionsImage from "./option.png";
import pageImage from "./page.png";
import raycast from "./raycast.png";
import reactImage from "./react-js.png";

const ProductHuntBadge = ({ mode = "light" }: { mode?: "light" | "neutral" | "dark" }) =>
  mode === "light" ? (
    <a
      href="https://www.producthunt.com/posts/wp-bones?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wp&#0045;bones"
      target="_blank"
      rel="noopener noreferrer">
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=476081&theme=light"
        alt="WP Bones - Allows for WordPress plugins with Laravel-like features | Product Hunt"
        style={{ width: "250px", height: "54px" }}
        width="250"
        height="54"
      />
    </a>
  ) : mode === "dark" ? (
    <a
      href="https://www.producthunt.com/posts/wp-bones?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wp&#0045;bones"
      target="_blank">
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=476081&theme=dark"
        alt="WP Bones - Allows for WordPress plugins with Laravel-like features | Product Hunt"
        style={{ width: "250px", height: "54px" }}
        width="250"
        height="54"
      />
    </a>
  ) : (
    <a
      href="https://www.producthunt.com/posts/wp-bones?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wp&#0045;bones"
      target="_blank">
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=476081&theme=neutral"
        alt="WP Bones - Allows for WordPress plugins with Laravel-like features | Product Hunt"
        style={{ width: "250px", height: "54px" }}
        width="250"
        height="54"
      />
    </a>
  );

export function HomeContent() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const htmlElement = document.documentElement;
    const colorScheme = htmlElement.getAttribute("data-mantine-color-scheme");
    if (colorScheme) {
      setColorScheme(colorScheme as any);
    }
    AOS.init();
  }, []);

  return (
    <Container size="xl">
      <Stack mx="xl">
        <Text
          my="xl"
          className={classes.fadeIn}
          ta="center"
          lh={1}
          fz={{ base: 48, md: 64, lg: 92 }}
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "violet", deg: 90 }}>
          WP Bones allows for WordPress plugins with Laravel-like features
        </Text>

        <Group justify="center">
          <ProductHuntBadge />
        </Group>

        <Center w={{ base: 400, sm: 600, lg: 800 }} mx="auto" my={48}>
          <PHPBonesCommand initialRotationX={16} />
        </Center>

        <Marquee fadeEdges pauseOnHover duration={80} fadeEdgesColor={colorScheme === "dark" ? "#111111" : "#ffffff"}>
          <Demo.Buttons />
        </Marquee>

        <div data-aos-duration="500" data-aos-delay="100" data-aos="fade-up" data-aos-once="true">
          <Text my="xl" ta={"center"} fz={24}>
            Streamlines and modernizes WordPress plugin development.
          </Text>
        </div>

        <Group justify="space-evenly">
          <Flex data-aos-duration="500" data-aos-delay="100" data-aos="fade-right" data-aos-once="true">
            <Button
              component="a"
              href="/docs"
              size="xl"
              radius={"xl"}
              variant="gradient"
              className={classes.buttonDocs}
              gradient={{ from: "blue", to: "violet", deg: 45 }}>
              Get started with the Docs →
            </Button>
          </Flex>
          <Flex data-aos-duration="500" data-aos-delay="100" data-aos="fade-left" data-aos-once="true">
            <Button
              component="a"
              href="https://wpbones.ownai.com/"
              size="xl"
              radius={"xl"}
              variant="gradient"
              className={classes.buttonChat}
              gradient={{ from: "teal", to: "lime", deg: 45 }}>
              Chat with WP Bones AI →
            </Button>
          </Flex>
        </Group>

        <Center
          component="a"
          href="https://www.raycast.com/Undolog/wp-bones"
          target="_blank"
          mt={64}
          mb={16}
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos="zoom-out"
          data-aoss-once="true">
          <Group align="center" justify="center">
            <Group>
              <Image component={NextImage} mx="auto" maw="240px" fit="fill" src={raycast} alt="PHP Bones" />
            </Group>
            <Stack>
              <Text
                component="div"
                ta={"center"}
                fz={24}
                style={{
                  textShadow: `0 0 10px ${colorScheme === "light" ? "rgba(0,0,200,0.2)" : "rgba(255,0,200,0.8)"} `,
                }}>
                If you love ❤️ Raycast, you will love the WP Bones extension too!
                <List mt={16} icon="✨">
                  <List.Item>Search in documentation</List.Item>
                  <List.Item>Read the abstract and Open in the browser</List.Item>
                  <List.Item>Search plugin template</List.Item>
                  <List.Item>Direct link to create a WP Bones Plugin</List.Item>
                  <List.Item>Menu Bar to check the latest version</List.Item>
                  <List.Item>Useful Links to Issue, FAQs and more</List.Item>
                </List>
              </Text>
            </Stack>
          </Group>
        </Center>

        <SimpleGrid
          mt={64}
          mb={24}
          cols={{ base: 1, sm: 2, lg: 3 }}
          style={{
            position: "relative",
            perspective: "1000px",
            transformStyle: "preserve-3d",
            perspectiveOrigin: "center center",
          }}>
          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Laravel-like"
              image={controllerImage}
              icon={<IconBrandLaravel />}
              href="/docs/CoreConcepts/architecture-foundations"
              description={
                <span>
                  A revolutionary framework that combines Composer, npm, Laravel coding style,{" "}
                  <strong>Blade templates</strong> and Gulp to bring modern development tools to the WordPress
                  environment.
                </span>
              }
            />
          </Flex>
          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Console Commands"
              href="/docs/BonesConsole/bones-console"
              icon={<IconTerminal />}
              image={consoleImage}
              description="Bones command-line interface for developing WordPress plugins provides helpful commands and customization options, while also simplifying the deployment process. Automatic creation of controllers, models, and views, as well as the ability to run migrations and seeders."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="ReactJS"
              href="/docs/GettingStarted/assets"
              icon={<IconBrandReact />}
              image={reactImage}
              description="WP Bones provides a simple and efficient way to integrate ReactJS into your WordPress plugin, allowing for easy creation of custom components and pages. Supports JavaScript and TypeScript. Styles are handled by Less and Sass."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="ORM"
              href="/docs/DatabaseORM/query-builder"
              icon={<IconDatabase />}
              image={dbImage}
              description="Integrate Illuminate Eloquent ORM into WP Bones, allowing for easy database querying and model creation."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Migration and seeding"
              href="/docs/DatabaseORM/migrations"
              icon={<IconDatabase />}
              image={migrationImage}
              description="Supports database migration and seeding, allowing for easy database management and version control. You can create and run migrations and seeders with ease."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Menu"
              href="/docs/CoreConcepts/menus"
              icon={<IconMenuDeep />}
              image={menuImage}
              description="Offers a unique approach to menus routing, form method spoofing, and redirects in load, making it a powerful tool for building custom WordPress admin menu."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Pages"
              href="/docs/CoreConcepts/pages-routing"
              icon={<IconPaperclip />}
              image={pageImage}
              description="Creating custom page routes and pages is straightforward and flexible, allowing for easy navigation and page creation without menus."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Logging"
              href="/docs/CoreConcepts/logging"
              icon={<IconPaperclip />}
              image={logsImage}
              description="WP Bones makes it easy and beautiful to log messages in your WordPress plugin with its configuration options and helper functions."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Ajax Calls"
              href="/docs/ServicesProvider/ajax"
              icon={<IconBrandJavascript />}
              image={ajaxImage}
              description="Add support for Ajax calls in WordPress with three different access levels: for logged-in users, not logged-in users, and everyone."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Custom Post and Taxonomy"
              href="/docs/ServicesProvider/custom-post-types"
              icon={<IconBrandWordpress />}
              image={cptImage}
              description="You can easily create a custom post type and custom taxonomy service provider."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Rest API"
              href="/docs/ServicesProvider/rest-api"
              icon={<IconApi />}
              image={apiImage}
              description="Provides a simple and efficient way to handle the WordPress REST API, including authentication and customizable routes."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Options"
              href="/docs/CoreConcepts/options"
              icon={<IconSettings2 />}
              image={optionsImage}
              description="The plugin options system in WordPress is efficient and easy to use, allowing for easy storage and retrieval of plugin settings."
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Shortcodes"
              href="/docs/ServicesProvider/shortcodes"
              icon={<IconCode />}
              description="A powerful and easy way to add custom functionality to WordPress. Simply add your shortcode classes to the config file and let the magic begin!"
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="Widgets"
              href="/docs/ServicesProvider/widgets"
              icon={<IconRectangle />}
              description="Widgets are a powerful way to add custom functionality to WordPress. Simply add your widget classes to the config file and let the magic begin!"
            />
          </Flex>

          <Flex data-aos-duration="500" data-aos-delay="400" data-aos="fade-up">
            <HomeCard
              title="And more..."
              href="/docs"
              icon={<IconEyeStar />}
              description="Supports Composer for dependency management, easy plugin activation and deactivation, an awesome options system, custom post types, REST API, and shortcodes."
            />
          </Flex>
        </SimpleGrid>
      </Stack>
      <Flex
        component="a"
        href="/docs"
        justify={"center"}
        style={{
          overflow: "hidden",
          height: "300px",
        }}>
        <Flex data-aos-duration="1500" data-aos-anchor-placement="top" data-aos-delay="100" data-aos="fade-up">
          <Image component={NextImage} mx="auto" maw="1272px" fit="fill" src={footer} alt="PHP Bones" />
        </Flex>
      </Flex>
    </Container>
  );
}
