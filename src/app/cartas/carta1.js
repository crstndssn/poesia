"use client";

import React, { useState } from "react";
import Popup from "../../components/Popup"; // Importa el componente Popup
import ContentPopUp from "../../components/ContentPopUp"; // Importa el componente Popup
import "../globals.css";

const Carta1 = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", content: [] });

  // Función para manejar el contenido del pop-up
  const handlePopupToggle = (title, content) => {
    setPopupContent({ title, content });
    setIsPopupVisible(true);
  };

  return (
    <div className="px-3 mb-12">
      <h1 className="font-bold text-2xl md:text-4xl mb-10 md:text-center">
        CARTA 1. El aeropuerto invisible
      </h1>
      <p className="text-lg md:text-xl">
        Querido Andru: <br />
        <br />
        Ahora que tienes el proyecto de disfrutar la tarea de ser maestro,
        escribo estas cartas para ti y para las niñas y niños que fueron parte
        de la experiencia de MARTES DE POESÍA y que hoy, como adultos, sueñan y trabajan por construir un mundo en el
        que todos tengamos un lugar, como aquel por el que pregunta María Elena
        Walsh en
        {" "}
        <ContentPopUp
          triggerClass="underline cursor-pointer"
          triggerText="el poema que tu memoria trajo a nuestro encuentro."
          content={[
            {
              type: "text",
              value: `El sol no tiene bolsillos  
              La luna no tiene mar,  
              ¿Por qué en un mundo tan grande  
              habrá tan poco lugar?  

              Del poema de María Elena Walsh  
              <strong>EL SOL NO TIENE BOLSILLOS<strong>`,
            }
          ]}
        />
        {" "}
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Ahora que tienes el proyecto de disfrutar la tarea de ser maestro,  escribo estas cartas
        para tí y para las niñas y niños que fueron parte de la experiencia de MARTES DE
        POESÍA y que hoy, como adultos,  sueñan y trabajan por construir un mundo en el que
        todos tengamos un  lugar, como aquel por el que pregunta María Elena Walsh en el
        poema que tu memoria trajo a nuestro encuentro 1
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Los estudiantes de la I.E Roberto Suaza Marquínez, a la que tú perteneciste, me llevaron
        al segundo piso de la planta física  para mostrarme, según ellos, el aeropuerto, porque
        desde allí podía verse el sector de la carretera nacional en donde hicieron aterrizar el
        avión para llevar a cabo el secuestro.
      </p>
      <p className="text-lg md:text-xl">
        Debido a este acontecimiento, El Hobo hizo parte de las noticias nacionales e
        internacionales. Estaba en la mirada del mundo, porque, además de ser un hecho que
        podía causar la ruptura de los diálogos de paz, había ocurrido de  manera muy
        cinematográfica.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        En 1984, este municipio había recibido el apelativo de “Ínsula de paz”, por ser uno de los
        tres lugares en los que se habían  firmado los acuerdos de paz con el M-19. Sin embargo,
        en los últimos años había sido objeto de dos tomas guerrilleras, en una de las cuales, la
        escuela que quedaba en el centro del pueblo y que en ese momento tenía los niños de
        vacaciones, pasó a ser trinchera del ejército.  Luego el riesgo para los niños se hizo
        evidente, así que decidieron  que continuaran sus clases en la sede del Bachillerato.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Esto, en un país en medio de la guerra, hace parte de la historia cotidiana de sus
        pobladores. Imágenes en la memoria y en las fotografías que revelan una relación casi
        naturalizada con hechos violentos o con la amenaza de que ocurran.  Están ahí… sin
        muchas preguntas. Y también  sin respuestas.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Pero ¿por qué empezar con la imagen de los niños y niñas mostrándome un aeropuerto
        invisible? ¿por qué, con ellos contándome que algunos tenían en sus álbumes familiares
        fotos con el avión que forzaron a aterrizar  ese día?, ¿Tú también tenías una? . Asomada
        a una parte fundamental de la historia de estos niños y sus familias, asomada a sus
        inquietudes y prioridades, escuchándoles hablar de este acontecimiento como parte de la
        magia que utilizan cada día para convertir los miedos en posibilidades de ser, me veo
        preguntándome si hay algo que yo pueda hacer como maestra y como poeta frente a esta
        realidad.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        Les conté que venía de Tarqui (Huila). ¿Recuerdas?,  un municipio acomodado en la
        Serranía de las Minas, en el que empecé a jugar poesía con mis estudiantes y con
        algunos grupos de las escuelas.  Con las profesoras del área de Lengua Castellana
        logramos un espacio diario para que los estudiantes renovaran y reconstruyeran su
        relación con la poesía, al que bautizamos TRES POEMAS PARA CELEBRAR EL DÍA.
      </p>
      <br />
      <p className="text-lg md:text-xl">Durante varios años, al finalizar la jornada escolar, a las 4 de la tarde, nos reuníamos en
        la biblioteca del Colegio,  con los estudiantes del grado que tenía a su cargo en ese
        momento la actividad. A ellos se sumaban estudiantes de otros grados que querían
        disfrutar de la poesía o quizá husmear un poco en la vida de los tres lectores del día para
        ver cuál era la razón de su celebración. Así, con un poco de obligación y otro poco de
        voluntad, logramos que los chicos y chicas se relacionaran con la poesía de otra manera</p>
      <br />
      <p className="text-lg md:text-xl">.
        Pero “¿qué podemos celebrar?.  A nosotros no nos pasan grandes cosas”.  El asunto no
        sólo era qué poema voy a leer.  Entonces, ¿qué poema? ¿por qué este? ¿qué celebro?
        ¿Tengo que decirlo a todos? ¿Y si se ríen? ¿Y eso no es para niñas?. Preguntas atadas a
        su cotidianidad, al concepto de poesía, al conocimiento de textos poéticos, al concepto de
        vida y celebración, a los miedos de exponerse, a la relación entre la poesía y su
        reconocimiento de su identidad sexual…En fin.</p>
      <br />
      <p className="text-lg md:text-xl">Frente a todo esto, la búsqueda de respuestas no estaba en el salón de clase. En la sala
        de mi casa, recostados en el piso, con todos mis libros de poesía a su disposición y una
        conversación desparpajada, sin presiones, con muchas risas y descubrimientos de
        quiénes somos, qué soñamos, qué queremos. Todos, en igualdad de condiciones, todos
        vulnerables y todos con poder. Ahí encontramos respuestas.</p>
      <br />
      <p className="text-lg md:text-xl">
        Luego, cuando fui a trabajar al municipio de El Hobo, me llevé todo lo que mis estudiantes
        de Tarqui me enseñaron en esos encuentros y escuché atentamente estos nuevos
        requerimientos. ¿De dónde aprendí a escuchar? de mi madre, de mis abuelas, de mis
        maestras y maestros, de la señora de la esquina, del señor de la tienda,   de la poesía, en
        fin… de la vida.  Escuchar era la clave y aún sigue siendo.  Así que sentí que la poesía,
        nuevamente, nos abriría caminos en el Hobo.
      </p>
      <br />
      <p className="text-lg md:text-xl">
        ¿Y cómo logré que fueran los martes? ¡Te seguiré contando!
        Un abrazo de albahaca y brisa.

        Amparo.
      </p>

      {/* Componente Popup */}
      <Popup
        isVisible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        title={popupContent.title}
        content={popupContent.content}
      />
    </div>
  );
};

export default Carta1;
