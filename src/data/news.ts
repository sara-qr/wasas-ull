export interface NewsImage { src: string; alt: string; }
export interface NewsItem {
  slug: string;
  date: string | null;
  tag: string;
  tone: "violet" | "blue" | "orange";
  title: string;
  excerpt: string;
  content: string;
  images: NewsImage[];
  visual?: string;
  funding?: string;
  disclaimer?: string;
  sourcePost?: number;
}

// Los posts sin fecha de publicación mantienen el orden editorial del PDF (22 a 1).
// Las cinco noticias anteriores conservan sus fechas y aparecen después.
export const newsItems: NewsItem[] = [
  {
    "slug": "post-22",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Social Connection Supports Health and Wellbeing",
    "excerpt": "Feeling connected to other people is an important part of wellbeing.",
    "content": "Feeling connected to other people is an important part of wellbeing. Shared activities can reduce isolation, create trust and remind young people that difficult emotions do not have to be carried alone. WASAS builds social connection through group sport, ecopsychology sessions, creative work and environmental action. Participants learn alongside one another, cooperate in new situations and contribute to a common purpose. These relationships are not simply an added benefit of the project; they are central to building resilience and hope.",
    "images": [
      {
        "src": "/images/news/post-22/image-01.jpg",
        "alt": "Figuras de madera conectadas entre sí sobre una superficie oscura"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 22
  },
  {
    "slug": "post-21",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Sport Does Not Always Need a Winner",
    "excerpt": "Sport can be valuable even when nobody keeps score.",
    "content": "Sport can be valuable even when nobody keeps score. Playing together can develop confidence, communication and enjoyment without turning every activity into a test of who is best. WASAS uses non-competitive and cooperative approaches so that more young people can feel comfortable taking part. By reducing pressure and focusing on shared experience, the project creates room for experimentation, mutual support and connection with the beach and sea. Participation itself becomes the achievement.",
    "images": [
      {
        "src": "/images/news/post-21/image-01.jpg",
        "alt": "Balón de voleibol ante una red en la playa"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 21
  },
  {
    "slug": "post-20",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Movement Can Change Your Mood",
    "excerpt": "Movement can create a shift in how we feel.",
    "content": "Movement can create a shift in how we feel. A walk, a run, a game or time on the water can offer space to release tension, regain focus and reconnect with the present moment. WASAS encourages young people to discover forms of physical activity that feel enjoyable, inclusive and realistic for them. The goal is not perfect performance. It is to experience the benefits of moving in nature, notice changes in mood and build habits that support emotional wellbeing over time.",
    "images": [
      {
        "src": "/images/news/post-20/image-01.jpg",
        "alt": "Persona caminando por una pasarela hacia la playa"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 20
  },
  {
    "slug": "post-19",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "WASAS in Action for Young People and the Environment",
    "excerpt": "WASAS brings a clear message into community and sporting spaces: young people can respond to climate anxiety through movement, connection and meaningful environmental engagement.",
    "content": "WASAS brings a clear message into community and sporting spaces: young people can respond to climate anxiety through movement, connection and meaningful environmental engagement. The project’s activities make this message visible and practical. Participants are invited to learn about climate emotions, experience inclusive sport in natural environments and recognise the value of acting alongside others. Every workshop, outdoor session and conversation contributes to a broader culture of wellbeing, participation and care for the places we share.",
    "images": [
      {
        "src": "/images/news/post-19/image-01.jpg",
        "alt": "Bandera de WASAS en una actividad deportiva comunitaria"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 19
  },
  {
    "slug": "post-18",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "From the Swimming Pool to Crete’s Blue Waters",
    "excerpt": "Young participants in Greece moved from preparation in a controlled swimming environment to an outdoor experience in Crete’s coastal waters.",
    "content": "Young participants in Greece moved from preparation in a controlled swimming environment to an outdoor experience in Crete’s coastal waters. This gradual transition helped build water confidence, reinforce safety and make the activity more accessible to participants with different levels of experience. Once at sea, kayaking offered a chance to move, cooperate and see the coastline from a different perspective. The activity reflects the WASAS belief that carefully supported challenges can strengthen confidence, improve wellbeing and deepen young people’s connection with the natural world.",
    "images": [
      {
        "src": "/images/news/post-18/image-01.jpg",
        "alt": "Participantes practicando kayak en aguas de Creta"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 18
  },
  {
    "slug": "post-17",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "The Second WASAS Activity Round Begins in Greece",
    "excerpt": "The WASAS journey continued in Greece, where the second activity round brought the project’s approach to a new coastal setting.",
    "content": "The WASAS journey continued in Greece, where the second activity round brought the project’s approach to a new coastal setting. Participants prepared for guided water-based activity while becoming familiar with the equipment, the environment and one another. Each national stage of WASAS follows the same shared purpose while responding to its local context. In Greece, the combination of physical activity, sea contact, cooperation and ecopsychology gives young people another opportunity to explore climate emotions through movement and supportive group experience.",
    "images": [
      {
        "src": "/images/news/post-17/image-01.jpg",
        "alt": "Participantes preparando kayaks junto a la costa griega"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 17
  },
  {
    "slug": "post-16",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "WASAS Connects Climate Wellbeing Learning with Outdoor Action",
    "excerpt": "Greek-language WASAS materials introduce young people to the project’s central ideas: emotional wellbeing, movement in nature, climate anxiety, cooperation and care for the sea.",
    "content": "Greek-language WASAS materials introduce young people to the project’s central ideas: emotional wellbeing, movement in nature, climate anxiety, cooperation and care for the sea. Clear, practical guidance helps participants understand how everyday outdoor experiences can support both personal health and environmental awareness. The accompanying group activities turn these ideas into practice through discussion, creativity, shared movement and time at the beach. By learning together and acting together, participants can build confidence, strengthen social bonds and see that responding to climate concern can begin with small, positive experiences in their own community.",
    "images": [
      {
        "src": "/images/news/post-16/image-01.jpg",
        "alt": "Materiales educativos de WASAS en griego"
      },
      {
        "src": "/images/news/post-16/image-02.jpg",
        "alt": "Participantes mostrando carteles realizados en una actividad al aire libre"
      },
      {
        "src": "/images/news/post-16/image-03.jpg",
        "alt": "Grupo reunido bajo un refugio durante una actividad de WASAS"
      },
      {
        "src": "/images/news/post-16/image-04.jpg",
        "alt": "Jóvenes participando en actividades en la playa"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 16
  },
  {
    "slug": "post-15",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "First WASAS Activity Round Completed in Tenerife",
    "excerpt": "The first WASAS activity round in Tenerife concluded with a strong sense of achievement and community.",
    "content": "The first WASAS activity round in Tenerife concluded with a strong sense of achievement and community. Young participants completed a shared outdoor experience that combined preparation, water-based activity, cooperation and contact with the sea. Completing the first round is more than a project milestone. It demonstrates how inclusive sport can create positive memories, strengthen relationships and give young people a practical way to explore wellbeing in nature. The lessons from Tenerife will also support the project’s next activities across Europe.",
    "images": [
      {
        "src": "/images/news/post-15/image-01.jpg",
        "alt": "Grupo de participantes de WASAS posando en la playa de Tenerife"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 15
  },
  {
    "slug": "post-14",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "WASAS Participants Take to the Water in Tenerife",
    "excerpt": "On 16 May 2026, twenty young people took part in the first WASAS beach session at Los Cristianos Beach.",
    "content": "On 16 May 2026, twenty young people took part in the first WASAS beach session at Los Cristianos Beach. With the support of the Arona sailing school, participants enjoyed kayaking and paddle surfing in a welcoming group environment. The session gave young people from local schools and secondary schools an opportunity to be active outdoors, build confidence on the water and experience the coastline from a new perspective. It marked an important step in the project’s effort to connect inclusive sport, emotional wellbeing and appreciation of the natural environment.",
    "images": [
      {
        "src": "/images/news/post-14/image-01.jpg",
        "alt": "Kayaks y participantes en el agua durante la sesión de Los Cristianos"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 14
  },
  {
    "slug": "post-13",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "From the Sports Hall to the Tenerife Coastline",
    "excerpt": "The first outdoor stage of WASAS brought young participants together on the Tenerife coast.",
    "content": "The first outdoor stage of WASAS brought young participants together on the Tenerife coast. Moving from the sports hall to the beach opened a new setting for physical activity, group learning and direct contact with the natural environment. Before entering the water, the group received guidance, prepared the equipment and built confidence together. This combination of safety, cooperation and anticipation reflects the WASAS approach: creating inclusive experiences in which young people can try something new, support one another and connect movement with the sea.",
    "images": [
      {
        "src": "/images/news/post-13/image-01.jpg",
        "alt": "Grupo de jóvenes preparándose para una actividad en la costa de Tenerife"
      },
      {
        "src": "/images/news/post-13/image-02.jpg",
        "alt": "Jóvenes reunidos en la playa junto al equipo para actividades acuáticas"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 13
  },
  {
    "slug": "post-12",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "WASAS Presented Through Intergenerational Volleyball in Tenerife",
    "excerpt": "WASAS was presented to the Arona Voley community on 8 May 2026 through an intergenerational volleyball tournament.",
    "content": "WASAS was presented to the Arona Voley community on 8 May 2026 through an intergenerational volleyball tournament. Players from the women’s team, younger age categories and members of the Arona Spring in Motion men’s team came together for an energetic introduction to the project. The event showed how a familiar sporting environment can become a starting point for a wider conversation about wellbeing, inclusion and climate emotions. Participants also learned about the next WASAS activity, which would take the project from the sports hall to the coast.",
    "images": [
      {
        "src": "/images/news/post-12/image-01.jpg",
        "alt": "Participantes del torneo intergeneracional de voleibol en Tenerife"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 12
  },
  {
    "slug": "post-11",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "WASAS Partners Meet to Turn the Project Plan into Action",
    "excerpt": "The WASAS partners came together to coordinate the next stages of the project and connect their different areas of expertise.",
    "content": "The WASAS partners came together to coordinate the next stages of the project and connect their different areas of expertise. The meeting provided space to align the sporting, ecopsychology, research, inclusion, communication and evaluation strands of the work. Face-to-face collaboration helps ensure that participants in Spain, Greece and Cyprus experience a coherent project while allowing each country to adapt activities to its own young people and local environment. With responsibilities agreed and ideas shared, the consortium is ready to move from planning into practical delivery.",
    "images": [
      {
        "src": "/images/news/post-11/image-01.jpg",
        "alt": "Equipo de WASAS reunido al aire libre"
      },
      {
        "src": "/images/news/post-11/image-02.jpg",
        "alt": "Socios de WASAS posando en una sala de reuniones"
      },
      {
        "src": "/images/news/post-11/image-03.jpg",
        "alt": "Socios de WASAS trabajando alrededor de una mesa"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 11
  },
  {
    "slug": "post-10",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Creative Expression Helps Young People Find Their Voice",
    "excerpt": "Creativity gives young people another language for exploring complex emotions.",
    "content": "Creativity gives young people another language for exploring complex emotions. Film, photography, drawing and storytelling can help participants express experiences that may be difficult to put into words, while also strengthening confidence and connection with others. Digital storytelling is therefore an important part of WASAS. Young people will help create audiovisual and online material that reflects their own journey through sport, nature and climate emotions. Their perspectives will contribute to the project’s final short film, e-book and wider European communication.",
    "images": [
      {
        "src": "/images/news/post-10/image-01.jpg",
        "alt": "Sala de cine con asientos rojos y palomitas"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 10
  },
  {
    "slug": "post-09",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Climate Emotions Are Easier to Face Together",
    "excerpt": "Difficult feelings can become heavier when we believe we must manage them alone.",
    "content": "Difficult feelings can become heavier when we believe we must manage them alone. Listening, sharing experiences and feeling accepted by a group can make it easier to understand what we are going through. WASAS brings young people together through sport, nature and ecopsychology. Its group activities encourage mutual support, cooperation and a sense of belonging. The message is simple: climate concern is a shared experience, and responding together can create hope, resilience and meaningful action.",
    "images": [
      {
        "src": "/images/news/post-09/image-01.jpg",
        "alt": "Ilustración de jóvenes compartiendo y escuchándose"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 9
  },
  {
    "slug": "post-08",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Nature Can Support Our Wellbeing",
    "excerpt": "Time in natural environments can offer a welcome pause from daily pressure.",
    "content": "Time in natural environments can offer a welcome pause from daily pressure. The sounds, colours and rhythms of the outdoors can help us slow down, pay attention to the present and reconnect with our bodies. This relationship between nature and emotional wellbeing lies at the heart of WASAS. Through ecopsychology and outdoor physical activity, young participants explore healthy ways to respond to stress and climate-related emotions while developing a closer, more caring relationship with the environments around them.",
    "images": [
      {
        "src": "/images/news/post-08/image-01.jpg",
        "alt": "Joven soplando un diente de león al aire libre"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 8
  },
  {
    "slug": "post-07",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "What If Sport Did Not Feel Like Pressure",
    "excerpt": "Sport does not have to be defined by competition, comparison or the fear of getting something wrong.",
    "content": "Sport does not have to be defined by competition, comparison or the fear of getting something wrong. It can also be playful, cooperative and shaped around the needs of each participant. WASAS uses inclusive, non-competitive activities to help young people experience movement in a different way. The focus is on participation, enjoyment, confidence and connection with nature. This approach opens the door to young people who may not feel comfortable in traditional sporting settings and shows that everyone can benefit from being active.",
    "images": [
      {
        "src": "/images/news/post-07/image-01.jpg",
        "alt": "Cronómetro sobre un fondo claro en un cartel sobre deporte sin presión"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 7
  },
  {
    "slug": "post-06",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "You Are Not Alone in Feeling Climate Concern",
    "excerpt": "Many young people worry about what climate change means for their future.",
    "content": "Many young people worry about what climate change means for their future. The WASAS campaign highlights that this concern is widespread and that climate-related emotions deserve to be acknowledged rather than dismissed. WASAS creates supportive spaces where young people can speak, listen and take part in positive experiences with others. By combining time in nature, inclusive movement and practical environmental action, the project helps participants move from isolation and uncertainty towards connection, confidence and a stronger sense of agency.",
    "images": [
      {
        "src": "/images/news/post-06/image-01.jpg",
        "alt": "Jóvenes conversando junto al mar al atardecer"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 6
  },
  {
    "slug": "post-05",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Join the WASAS Community",
    "excerpt": "WASAS invites young people, families, schools, sports clubs, municipalities and environmental organisations to take part in a shared journey towards personal and planetary wellbeing.",
    "content": "WASAS invites young people, families, schools, sports clubs, municipalities and environmental organisations to take part in a shared journey towards personal and planetary wellbeing. Through inclusive tournaments, outdoor sessions, ecopsychology workshops and environmental activities, participants can experience sport as a source of connection rather than pressure. To learn more about forthcoming opportunities or explore ways to collaborate, contact projectwasas@gmail.com and follow WASAS on Instagram, Facebook and YouTube.",
    "images": [
      {
        "src": "/images/news/post-05/image-01.jpg",
        "alt": "Cartel de invitación a contactar y seguir el proyecto WASAS"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 5
  },
  {
    "slug": "post-04",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "How WASAS Brings Sport Nature and Wellbeing Together",
    "excerpt": "WASAS turns its objectives into practical experiences delivered across Spain, Greece and Cyprus.",
    "content": "WASAS turns its objectives into practical experiences delivered across Spain, Greece and Cyprus. Ecopsychology sessions help participants recognise climate-related emotions and strengthen their emotional resilience. Inclusive activities such as surfing, paddle surfing, kayaking, beach volleyball and catchball create opportunities to move, cooperate and enjoy nature without excessive pressure. Environmental action and digital storytelling complete the journey. Young participants contribute to activities such as beach clean-ups and more sustainable use of equipment, while short films, an e-book and social media content give them creative ways to share what they have learned.",
    "images": [
      {
        "src": "/images/news/post-04/image-01.jpg",
        "alt": "Infografía de las actividades principales del proyecto WASAS"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 4
  },
  {
    "slug": "post-03",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Turning Climate Anxiety into Resilience and Action",
    "excerpt": "Climate change can create fear, sadness, frustration and uncertainty, especially among young people.",
    "content": "Climate change can create fear, sadness, frustration and uncertainty, especially among young people. At the same time, many young people face barriers to conventional or competitive sport, including hearing impairment, behavioural or academic difficulties, problematic screen use, or simply a lack of confidence in sporting environments. WASAS responds by combining ecopsychology with inclusive, non-competitive activities in nature. The project creates space for young people to understand difficult emotions, move at their own pace, build supportive relationships and discover how caring for personal wellbeing can go hand in hand with caring for the environment.",
    "images": [
      {
        "src": "/images/news/post-03/image-01.jpg",
        "alt": "Infografía sobre ecoansiedad y actividades inclusivas de WASAS"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 3
  },
  {
    "slug": "post-02",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Meet the European Partners Behind WASAS",
    "excerpt": "WASAS is delivered by four organisations whose expertise connects grassroots sport, ecopsychology, inclusion, research and creative communication.",
    "content": "WASAS is delivered by four organisations whose expertise connects grassroots sport, ecopsychology, inclusion, research and creative communication. Arona Voley coordinates the project from Tenerife and leads its physical and sporting activities. Anemos contributes specialist knowledge in ecopsychology and the relationship between wellbeing, movement and nature. The University of La Laguna supports the project’s scientific rigour, accessibility and evaluation, while Breezageri leads audiovisual production, creative communication and quality control. Together, the partners are delivering WASAS across Spain, Greece and Cyprus.",
    "images": [
      {
        "src": "/images/news/post-02/image-01.jpg",
        "alt": "Infografía con los cuatro socios europeos de WASAS"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 2
  },
  {
    "slug": "post-01",
    "date": null,
    "tag": "WASAS",
    "tone": "violet",
    "title": "Welcome to WASAS We Are Sand and Sea",
    "excerpt": "WASAS (We Are Sand And Sea) is a European project helping young people aged 12 to 18 respond to climate anxiety through inclusive physical activity in natural environments and ecopsychology.",
    "content": "WASAS (We Are Sand And Sea) is a European project helping young people aged 12 to 18 respond to climate anxiety through inclusive physical activity in natural environments and ecopsychology. Across Spain, Greece and Cyprus, the project brings together beach and sea sports, emotional management, environmental action and creative storytelling. By combining movement, nature and supportive group experiences, WASAS aims to turn concern about climate change into resilience, connection and practical action.",
    "images": [
      {
        "src": "/images/news/post-01/image-01.jpg",
        "alt": "Cartel de presentación de WASAS con arena, mar y logotipo del proyecto"
      }
    ],
    "funding": "Co-funded by the European Union through the Erasmus+ programme.",
    "disclaimer": "The European Commission’s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.",
    "sourcePost": 1
  },
  {
    "slug": "jornada-inicial-del-proyecto-wasas",
    "date": "28 abril 2024",
    "tag": "Evento",
    "tone": "violet",
    "title": "Jornada inicial del proyecto WASAS",
    "excerpt": "Compartimos los objetivos, las primeras líneas de trabajo y el enfoque científico del proyecto.",
    "content": "Compartimos los objetivos, las primeras líneas de trabajo y el enfoque científico del proyecto.",
    "images": [],
    "visual": "beach"
  },
  {
    "slug": "sesiones-con-jovenes-en-la-playa",
    "date": "15 abril 2024",
    "tag": "Actividad",
    "tone": "blue",
    "title": "Sesiones con jóvenes en la playa",
    "excerpt": "Deporte, conciencia ambiental y bienestar en conexión con el entorno costero.",
    "content": "Deporte, conciencia ambiental y bienestar en conexión con el entorno costero.",
    "images": [],
    "visual": "coast"
  },
  {
    "slug": "talleres-sobre-ecoansiedad",
    "date": "02 abril 2024",
    "tag": "Noticia",
    "tone": "orange",
    "title": "Talleres sobre ecoansiedad",
    "excerpt": "Espacios de diálogo y herramientas prácticas para transformar la preocupación climática.",
    "content": "Espacios de diálogo y herramientas prácticas para transformar la preocupación climática.",
    "images": [],
    "visual": "workshop"
  },
  {
    "slug": "evaluaciones-ull-en-marcha",
    "date": "18 marzo 2024",
    "tag": "Investigación",
    "tone": "blue",
    "title": "Evaluaciones ULL en marcha",
    "excerpt": "Aplicación de cuestionarios y análisis de datos en las playas prioritarias.",
    "content": "Aplicación de cuestionarios y análisis de datos en las playas prioritarias.",
    "images": [],
    "visual": "data"
  },
  {
    "slug": "produccion-de-material-audiovisual",
    "date": "05 marzo 2024",
    "tag": "Multimedia",
    "tone": "orange",
    "title": "Producción de material audiovisual",
    "excerpt": "Documentando cada paso para compartir aprendizajes y resultados.",
    "content": "Documentando cada paso para compartir aprendizajes y resultados.",
    "images": [],
    "visual": "media"
  }
];
