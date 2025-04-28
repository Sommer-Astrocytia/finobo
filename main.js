const askedQuestionsOrder = [];
      const firstAnswerIds = {};

      function reply() {
        const select = document.getElementById("questions");
        const question = select.value;
        if (!question) return;

        const chatWindow = document.getElementById("chatWindow");
        let userQuestion = "";
        let botResponse = "";

        const questionsMap = {
          hvem_er_du: [
            "Hvem er du?",
            "Jeg hedder Sommer Karlsen, er 42 år og studerer Digital Konceptudvikling med fokus på data og brugercentreret design.",
          ],
          hvad_har_du_arbejdet_med: [
            "Hvad har du arbejdet med?",
            "Jeg har arbejdet med master data management, problemløsning, automatisering af workflows, datadrevet UX-design og digital optimering.",
          ],
          hvad_er_dine_styrker: [
            "Hvad er dine styrker?",
            "Jeg er nysgerrig, struktureret, sød, analytisk og stærk i at kombinere dataindsigter med kreative løsninger.",
          ],
          hvad_er_dine_bedste_kvaliteter: [
            "Hvad er dine bedste kvaliteter?",
            "Mine bedste kvaliteter er vedholdenhed, kreativitet, problemløsning og evnen til at holde overblikket.",
          ],
          hvad_er_din_erfaring_med_ai: [
            "Hvad er din erfaring med AI?",
            "Jeg er vild med AI bruger det som en integreret del af mit arbejde til procesoptimering, dataanalyse og smartere brugeroplevelser.",
          ],
          hvorfor_finobo: [
            "Hvorfor vil du være i praktik hos Finobo?",
            "Finobo matcher mit ønske om at arbejde i en virksomhed med fokus på optimering og ansvarlig teknologi.",
          ],
          hvilke_systemer_kan_du: [
            "Hvilke systemer og værktøjer kan du?",
            "SAP, ERP, HTML, CSS, JavaScript, React, Miro, Jira, Figma, WordPress, Photoshop, Animaker, Excel, Illustrator, Github, Analytics mm.",
          ],
          hvordan_arbejder_du: [
            "Hvordan arbejder du?",
            "Jeg arbejder selvstændigt, tager ansvar fra dag ét, er nysgerrig og elsker at skabe nye løsninger.",
          ],
          hvad_er_din_baggrund: [
            "Hvad er din baggrund?",
            "Baggrund som forretningskonsulent, UX-designer og psykoterapeut, stærk i både teknologi og menneskelig forståelse.",
          ],
          hvad_kan_du_bidrage_med: [
            "Hvad kan du bidrage med hos Finobo?",
            "Jeg kan bidrage med analyser, workflow-optimering og stærke samarbejdsevner.",
          ],
            komme_i_kontakt: [
            "Hvordan kan vi komme i kontakt med dig?",
            "I kan ringe på: 60 90 00 01 eller sende en mail til: medgangnu@gmail.com",
          ]
        };

        userQuestion = questionsMap[question][0];

        if (!firstAnswerIds[question]) {
          askedQuestionsOrder.push(question);
          botResponse = questionsMap[question][1];

          const id = "answer-" + question;
          chatWindow.innerHTML += `
          <div class="message user">
            <div class="bubble user">${userQuestion}</div>
          </div>
          <div class="message bot" id="${id}">
            <div class="bubble bot">${botResponse}</div>
          </div>
        `;
          firstAnswerIds[question] = id;

          // Farve spørgsmålet
          const selectedOption = select.querySelector(
            `option[value="${question}"]`
          );
          if (selectedOption) {
            selectedOption.classList.add("asked");
          }
        } else {
          const answerNumber = askedQuestionsOrder.indexOf(question) + 1;
          botResponse = `Det spørgsmål stillede du som nummer ${answerNumber} 😁.`;

          chatWindow.innerHTML += `
          <div class="message user">
            <div class="bubble user">${userQuestion}</div>
          </div>
          <div class="message bot">
            <div class="bubble bot">${botResponse}</div>
          </div>
        `;

          // Scroll til første svar og blink
          const firstAnswer = document.getElementById(firstAnswerIds[question]);
          if (firstAnswer) {
            firstAnswer.scrollIntoView({ behavior: "smooth", block: "center" });
            firstAnswer.classList.add("highlight");
            setTimeout(() => {
              firstAnswer.classList.remove("highlight");
            }, 1000);
          }
        }

        chatWindow.scrollTop = chatWindow.scrollHeight;
      }

