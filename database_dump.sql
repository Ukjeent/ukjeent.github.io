--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    text text NOT NULL,
    url character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    skills text[] NOT NULL
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, name, text, url, image, skills) FROM stdin;
1	Interactive registration form	An interactive registration form for a fictional Full Stack conference with conditional behavior and interactivity. The form validates user input with error messages.	/interactive-form	images/interactive_form.png	{JavaScript,HTML,CSS}
2	Employee Directory	An employee directory using a third-party API to fetch random employees. Includes features like a modal window and search functionality.	/employee_directory	images/employee_directory.png	{JavaScript,HTML,CSS,API}
3	WebApp Dashboard	An interactive dashboard for a web application including SVG graphics, tables, interactive charts and form validation. LocalStorage is used to save changes in the settings section.	/web_app_dashboard	images/dashboard.png	{JavaScript,HTML,CSS,SASS}
4	Phrase Hunter	A browser-based, word guessing game. JavaScript and Object-Oriented Programming is used to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard or using the keyboard.	/oop-game-show-app-fs	images/wheel_of_success.png	{JavaScript,OOP,HTML,CSS}
5	Image Gallery	An interactive searchable image gallery with lightbox functionality, built with HTML, CSS and JavaScript.	/photo_gallery_project	images/gallery.png	{JavaScript,HTML,CSS,SASS}
\.


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 5, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

