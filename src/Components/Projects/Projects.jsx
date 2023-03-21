// React
import React, { useState } from "react";

// Styled
import styled from "styled-components";
import FilterItem from "./FilterItem";
import ProjectItem from "./ProjectItem";

const Container = styled.section`
  width: 100%;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FilterContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FilterItemContainer = styled.article`
  display: flex;
  gap: 32px;
`;
const H2 = styled.h2`
  font-family: "Convergence";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${(propsTheme) => propsTheme.theme.light.colors.blue};
`;
const H3 = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
const ProjectsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Projects = () => {
  const filters = [
    // Segun rol ejercido
    {
      filterType: `Según rol ejercido`,
      filter: [
        { name: `Diseño UX UI`, color: `lightPink`, id: 1 },
        { name: `Desarrollo Front-End`, color: `lightPurple`, id: 2 },
      ],
    },
    // Según habilidad técnica:
    {
      filterType: `Según habilidad técnica:`,
      filter: [
        { name: `JS Vanilla`, color: `lightBlue`, id: 1 },
        { name: `React JS`, color: `lightBlue`, id: 2 },
      ],
    },
  ];

  const extractFilters = filters.map((e) => e.filter);

  const projectsCollection = [
    // Beauty cosmetics
    {
      id: 8,
      title: `“Beauty Cosmetics” - E-commerce de cosméticos`,
      subtitle: `Diseño, prototipado y desarrollo de proyecto basado en un e-commerce de cosméticos.`,
      date: `Sep. 2022 - Nov. 2022`,
      filterTag: [{ name: `Desarrollo Front-End`, color: "lightPurple" }],
      skillsTag: [
        `HTML5`,
        `CSS3`,
        `JavaScript`,
        `React JS`,
        `Responsive design`,
        `Firebase`,
        `VSCode`,
        `GitHub`,
      ],
      image: `coderReactProject.png`,
      text: [
        `Manejo de datos en Firebase`,
        `Skeleton loader`,
        `Manejo de productos en el carrito`,
        `Validación de formularios`,
        `HTML, CSS, JavaScript y React JS`,
        `La página web se adapta a todos los dispositivos`,
      ],
      gitHub: `https://github.com/nataliavega98/Beauty-Cosmetics`,
      link: ` https://beautycosmetics.vercel.app/`,
      comment: `Proyecto integrador asociado a “React JS - Coderhouse”`,
    },
    // Gaming Store
    {
      id: 7,
      title: `“Gaming Store” - E-commerce de juegos`,
      subtitle: `Diseño, prototipado y desarrollo de proyecto basado en un e-commerce de juegos.`,
      date: `Sep. 2022 - Nov. 2022`,
      filterTag: [{ name: `Desarrollo Front-End`, color: "lightPurple" }],
      skillsTag: [
        `HTML5`,
        `CSS3`,
        `JS Vanilla`,
        `Responsive design`,
        `APIs`,
        `VSCode`,
        `GitHub`,
      ],
      image: `nucbaJSProject.png`,
      text: [
        `Manejo de API y JSON local`,
        `Skeleton loader`,
        `Carrusel dinámico`,
        `Simulación de registro e inicio de sesión utilizando localStorage`,
        `Manejo de productos en el carrito`,
        `Validación de formularios`,
        `HTML, CSS y JavaScript`,
        `La página web se adapta a todos los dispositivos`,
      ],
      gitHub: `https://github.com/nataliavega98/gaming-store`,
      link: `https://gamingstore-bynatalia.vercel.app/`,
      comment: `Proyecto integrador asociado a “JavaScript - NUCBA”.`,
    },
    // “LIMSA: Limpiador de zapatillas” - Landing page
    {
      id: 6,
      title: `“LIMSA: Limpiador de zapatillas” - Landing page`,
      subtitle: `Creación, investigación y diseño de una landing page para comercializar un producto de limpieza da calzado.`,
      date: `Sep. 2022 - Nov. 2022`,
      filterTag: [{ name: `Diseño UX UI`, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `UI Kit`,
        `Benchmarking`,
        `Aplicación móvil`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `coderLIMSAProject.png`,
      text: [
        `Diseño interactivo`,
        `Responsive design`,
        `Research y benchmarking`,
      ],
      behance: `https://www.behance.net/gallery/159075451/LIM-SA-Landing-page`,
      link: `https://lim-sa.netlify.app/`,
      comment: `Proyecto realizado en equipo junto un diseñador UX UI y dos desarrolladores Front-End. 
      En este trabajo ejercí el rol de Diseñadora UX UI.`,
    },
    // “HBO MAX - Re-diseño de página web
    {
      id: 5,
      title: `HBO MAX - Re-diseño de página web`,
      subtitle: `Investigación de puntos de dolor y problemas al usar la plataforma web, propuesta de rediseño y presentación de prototipo.`,
      date: `Sep. 2022 - Nov. 2022`,
      filterTag: [{ name: `Diseño UX UI`, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `UI Kit`,
        `Benchmarking`,
        `Diseño web`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `coderUXAProject.png`,
      text: [
        `Elementos del UX de James Garret`,
        `Entrevistas y encuestas`,
        `Análisis de tendencias`,
        `Benchmarking`,
        `Análisis UX`,
        `Lean UX Canvas`,
        `Mapa de trayectoria`,
        `Matriz de necesidades`,
        `Matriz de factibilidad, deseabilidad y viabilidad`,
        `Arquitectura de la información`,
        `Tree testing`,
        `Wireflow`,
        `Guia de estilos, sistema de diseño y UI Kit`,
        `Pruebas de usabilidad`,
      ],
      behance: `https://www.behance.net/gallery/153206055/Reporte-UX-VF-Natalia-Vega?tracking_source=project_owner_other_projects`,
      comment: `Proyecto integrador asociado a “Diseño UX UI Avanzado - Coderhouse”.`,
    },
    // “Gina: Una perrita muy dulce” - cuento digital interactivo
    {
      id: 4,
      title: `“Gina: Una perrita muy dulce” - cuento digital interactivo`,
      subtitle: `Diseño y desarrollo de cuento digital interactivo desarrollado en página web dónde el lector puede elegir su trayecto a través de la historia.`,
      date: `Sep. 2022 - Oct. 2022`,
      filterTag: [
        { name: `Diseño UX UI`, color: "lightPink" },
        { name: `Desarrollo Front-End`, color: "lightPurple" },
      ],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `Figma`,
        `HTML5`,
        `CSS3`,
        `Diseño web`,
        `VSCode`,
        `Ps`,
      ],
      image: `ginaProject.png`,
      text: [
        `Diseño interactivo`,
        `Maquetado y desarrollo con HTML y CSS`,
        `Responsive design`,
      ],
      link: `https://gina-unaperritamuydulce.vercel.app/`,
      comment: `Proyecto realizado en equipo junto a la autora de la historia.  En este trabajo ejercí el rol de Diseñadora y Desarrolladora (HTML y CSS).`,
    },
    // Victoria Fernandez - Landing Page
    {
      id: 3,
      title: `Victoria Fernandez - Landing Page`,
      subtitle: `Creación, investigación y diseño de una landing page para una community manager.`,
      date: `Ago. 2022 - Sep. 2022`,
      filterTag: [{ name: `Diseño UX UI`, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Responsive Design`,
        `Figma`,
        `UI Kit`,
        `Benchmarking`,
        `Whimsical`,
        `UXTweak`,
        `Ps`,
      ],
      image: `coderVFProject.png`,
      text: [
        `Investigación`,
        `Benchmarking`,
        `User-personas`,
        `Encuestas`,
        `Point of view (POV)`,
        `Minimo producto viable (MVP)`,
        `Card Sorting`,
        `Arquitectura de la información`,
        `Diseño en base a la identidad de la marca`,
        `Responsive design`,
      ],
      behance: `https://www.behance.net/gallery/153206055/Reporte-UX-VF-Natalia-Vega?tracking_source=project_owner_other_projects/`,
      comment: `Proyecto realizado en equipo junto con dos desarrolladores Front-End.
      En este trabajo ejercí el rol de Diseñadora UX UI.`,
    },
    // “Nereidas Cruceros” - Landing Page
    {
      id: 2,
      title: `“Nereidas Cruceros” - Landing Page`,
      subtitle: `Creación, diseño y desarrollo de landing page.`,
      date: `Ago. 2022 - Sep. 2022`,
      filterTag: [{ name: `Desarrollo Front-End`, color: "lightPurple" }],
      skillsTag: [
        `HTML5`,
        `CSS3`,
        `Diseño web`,
        `Responsive design`,
        `Maquetado`,
        `VSCode`,
      ],
      image: `nucbaDWebProject.png`,
      text: [
        `Maquetación en HTML5 y CSS3 de un proyecto final dónde se debia representar una landing page con distintas secciones dentro de la misma página y un registro e inicio de sesión`,
        `Maquetado y desarrollo con HTML y CSS`,
        `Responsive design`,
      ],
      link: `https://nereidas-cruceros.vercel.app/`,
      comment: `Proyecto integrador asociado a “Diseño web - NUCBA”`,
    },
    // “Share” - Aplicación móvil para android
    {
      id: 1,
      title: `“Share” - Aplicación móvil para android`,
      subtitle: `Creación, investigación y diseño de una aplicación móvil.`,
      date: `Feb. 2022 - May. 2022`,
      filterTag: [{ name: `Diseño UX UI`, color: "lightPink" }],
      skillsTag: [
        `Prototipado`,
        `Figma`,
        `UI Kit`,
        `Benchmarking`,
        `Aplicación móvil`,
        `Whimsical`,
        `Optimal Workshop`,
        `Ps`,
        `Ai`,
      ],
      image: `coderUXProject.png`,
      text: [
        `Diseño centrado en el usuario`,
        `Benchmarking`,
        `Responsive design`,
        `User-personas y storyboard`,
        `Entrevistas cualitativas y encuestas`,
        `Arquitectura de la información y user-flow`,
        `Bocetado de wireframes, prototipado en baja fidelidad y alta fidelidad (LO-FI, HI-FI)`,
        `Pruebas de usabilidad.`,
        `Elaboración de UI kit y Atomic Design.`,
      ],
      link: `https://nereidas-cruceros.vercel.app/`,
      comment: `Proyecto integrador asociado a “Diseño web - NUCBA”`,
    },
  ];
  const [filterSelected, setFilterSelected] = useState(`all`);
  console.log(filterSelected);
  const renderFilters = filters.map((item) => (
    <FilterItem
      filterType={item.filterType}
      filter={item.filter}
      setterFilter={setFilterSelected}
      filterSelected={filterSelected}
    ></FilterItem>
  ));
  function renderProjects(colection) {
    return colection.map((item) => (
      <ProjectItem
        title={item.title}
        subtitle={item.subtitle}
        date={item.date}
        filterTag={item.filterTag}
        skillsTag={item.skillsTag}
        image={item.image}
        text={item.text}
        behance={item.behance}
        gitHub={item.gitHub}
        link={item.link}
        id={item.id}
        key={item.id}
        comment={item.comment}
      ></ProjectItem>
    ));
  }

  const filteredProjects = () => {
    if (filterSelected === `all`) {
      return renderProjects(projectsCollection);
    } else {
      const filterProjects = projectsCollection.filter((project) => {
        return (
          project.filterTag.some((e) => e.name === filterSelected) ||
          project.skillsTag.some((e) => e === filterSelected)
        );
      });
      console.log(filterProjects);
      return renderProjects(filterProjects);
    }
  };
  return (
    <Container>
      <H2>Proyectos</H2>
      <FilterContainer>
        <H3>Filtrar:</H3>
        <FilterItemContainer>{renderFilters}</FilterItemContainer>
      </FilterContainer>
      <ProjectsContainer>{filteredProjects()}</ProjectsContainer>
    </Container>
  );
};

export default Projects;
