import React, { Component } from 'react';
import { Row, Col, Panel, Overlay, Popover } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Row>
            <Col md={5}>
              <Panel header={<h4>Texto da lei</h4>}>
                <h1>MEDIDA PROVISÓRIA Nº 746, DE 22 DE SETEMBRO DE 2016.</h1>
                <blockquote>
                  Institui a Política de Fomento à Implementação de Escolas de Ensino Médio em Tempo Integral,
                  altera a Lei nº 9.394, de 20 de dezembro de 1996, que estabelece as diretrizes e bases da educação
                  nacional, e a Lei nº 11.494 de 20 de junho 2007, que regulamenta o Fundo de Manutenção e
                  Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação, e dá outras
                  providências.
                </blockquote>
                <p>O PRESIDENTE DA REPÚBLICA, no uso da atribuição que lhe confere o art. 62 da Constituição, adota a
                  seguinte Medida Provisória, com força de lei:</p>
                <p>Art. 1º A Lei nº 9.394, de 20 de dezembro de 1996, passa a vigorar com as seguintes alterações:</p>
                <p>“Art. 24. .......................................................................</p>
                <p>.............................................................................................</p>


                <p id="art24-punic" className="bg-success">
                  Parágrafo único. A carga horária mínima anual de que trata o inciso I do <em>caput</em> deverá ser
                  progressivamente ampliada, no ensino médio, para mil e quatrocentas horas, observadas as normas do
                  respectivo sistema de ensino e de acordo com as diretrizes, os objetivos, as metas e as estratégias de
                  implementação estabelecidos no Plano Nacional de Educação.” (NR)</p>

                <p>“Art. 26. .......................................................................</p>

                <p id="art26-p1" className="bg-info">
                  § 1º Os currículos a que se refere o <em>caput</em> devem abranger, obrigatoriamente, o estudo da
                  língua
                  portuguesa e da matemática, o conhecimento do mundo físico e natural e da realidade social e política,
                  especialmente da
                  <del className="bg-danger">República Federativa do</del>
                  Brasil
                  <ins className="bg-success">, observado, na educação infantil, o disposto no art.
                    31, no ensino fundamental, o disposto no art. 32, e no ensino médio, o disposto no art. 36
                  </ins>
                  .
                </p>

                <p>§ 2º O ensino da arte, especialmente em suas expressões regionais, constituirá componente curricular
                  obrigatório da educação infantil e do ensino fundamental, de forma a promover o desenvolvimento
                  cultural dos alunos.</p>
                <p>§ 3º A educação física, integrada à proposta pedagógica da escola, é componente curricular
                  obrigatório da educação infantil e do ensino fundamental, sendo sua prática facultativa ao aluno:</p>
                <p>.............................................................................................</p>
                <p>§ 5º No currículo do ensino fundamental, será ofertada a língua inglesa a partir do sexto ano.</p>
                <p>.............................................................................................</p>
                <p>§ 7º A Base Nacional Comum Curricular disporá sobre os temas transversais que poderão ser incluídos
                  nos currículos de que trata o caput.</p>
                <p>.............................................................................................</p>
                <p>§ 10. A inclusão de novos componentes curriculares de caráter obrigatório na Base Nacional Comum
                  Curricular dependerá de aprovação do Conselho Nacional de Educação e de homologação pelo Ministro de
                  Estado da Educação, ouvidos o Conselho Nacional de Secretários de Educação - Consed e a União Nacional
                  de Dirigentes de Educação - Undime.” (NR)</p>
                <p>“Art. 36. O currículo do ensino médio será composto pela Base Nacional Comum Curricular e por
                  itinerários formativos específicos, a serem definidos pelos sistemas de ensino, com ênfase nas
                  seguintes áreas de conhecimento ou de atuação profissional:</p>
                <p>I - linguagens;</p>
                <p>II - matemática;</p>
                <p>III - ciências da natureza;</p>
                <p>IV - ciências humanas; e</p>
                <p>V - formação técnica e profissional.</p>
                <p>§ 1º Os sistemas de ensino poderão compor os seus currículos com base em mais de uma área prevista
                  nos incisos I a V do caput.</p>
                <p>§ 3º A organização das áreas de que trata o caput e das respectivas competências, habilidades e
                  expectativas de aprendizagem, definidas na Base Nacional Comum Curricular, será feita de acordo com
                  critérios estabelecidos em cada sistema de ensino.</p>
                <p>§ 5º Os currículos do ensino médio deverão considerar a formação integral do aluno, de maneira a
                  adotar um trabalho voltado para a construção de seu projeto de vida e para a sua formação nos aspectos
                  cognitivos e socioemocionais, conforme diretrizes definidas pelo Ministério da Educação.</p>
                <p>§ 6º A carga horária destinada ao cumprimento da Base Nacional Comum Curricular não poderá ser
                  superior a mil e duzentas horas da carga horária total do ensino médio, de acordo com a definição dos
                  sistemas de ensino.</p>
                <p>§ 7º A parte diversificada dos currículos de que trata o caput do art. 26, definida em cada sistema
                  de ensino, deverá estar integrada à Base Nacional Comum Curricular e ser articulada a partir do
                  contexto histórico, econômico, social, ambiental e cultural.</p>
                <p>§ 8º Os currículos de ensino médio incluirão, obrigatoriamente, o estudo da língua inglesa e poderão
                  ofertar outras línguas estrangeiras, em caráter optativo, preferencialmente o espanhol, de acordo com
                  a disponibilidade de oferta, locais e horários definidos pelos sistemas de ensino.</p>
                <p>§ 9º O ensino de língua portuguesa e matemática será obrigatório nos três anos do ensino médio.</p>
                <p>§ 10. Os sistemas de ensino, mediante disponibilidade de vagas na rede, possibilitarão ao aluno
                  concluinte do ensino médio cursar, no ano letivo subsequente ao da conclusão, outro itinerário
                  formativo de que trata o caput.</p>
                <p>§ 11. A critério dos sistemas de ensino, a oferta de formação a que se refere o inciso V do caput
                  considerará:</p>
                <p>I - a inclusão de experiência prática de trabalho no setor produtivo ou em ambientes de simulação,
                  estabelecendo parcerias e fazendo uso, quando aplicável, de instrumentos estabelecidos pela legislação
                  sobre aprendizagem profissional; e</p>
                <p>II - a possibilidade de concessão de certificados intermediários de qualificação para o trabalho,
                  quando a formação for estruturada e organizada em etapas com terminalidade.</p>
                <p>§ 12. A oferta de formações experimentais em áreas que não constem do Catálogo Nacional dos Cursos
                  Técnicos dependerá, para sua continuidade, do reconhecimento pelo respectivo Conselho Estadual de
                  Educação, no prazo de três anos, e da inserção no Catálogo Nacional dos Cursos Técnicos, no prazo de
                  cinco anos, contados da data de oferta inicial da formação.</p>
                <p>§ 13. Ao concluir o ensino médio, as instituições de ensino emitirão diploma com validade nacional
                  que habilitará o diplomado ao prosseguimento dos estudos em nível superior e demais cursos ou
                  formações para os quais a conclusão do ensino médio seja obrigatória.</p>
                <p>§ 14. A União, em colaboração com os Estados e o Distrito Federal, estabelecerá os padrões de
                  desempenho esperados para o ensino médio, que serão referência nos processos nacionais de avaliação,
                  considerada a Base Nacional Comum Curricular.</p>
                <p>§ 15. Além das formas de organização previstas no art. 23, o ensino médio poderá ser organizado em
                  módulos e adotar o sistema de créditos ou disciplinas com terminalidade específica, observada a Base
                  Nacional Comum Curricular, a fim de estimular o prosseguimento dos estudos.</p>
                <p>§ 16. Os conteúdos cursados durante o ensino médio poderão ser convalidados para aproveitamento de
                  créditos no ensino superior, após normatização do Conselho Nacional de Educação e homologação pelo
                  Ministro de Estado da Educação.</p>
                <p>§ 17. Para efeito de cumprimento de exigências curriculares do ensino médio, os sistemas de ensino
                  poderão reconhecer, mediante regulamentação própria, conhecimentos, saberes, habilidades e
                  competências, mediante diferentes formas de comprovação, como:</p>
                <p>I - demonstração prática;</p>
                <p>II - experiência de trabalho supervisionado ou outra experiência adquirida fora do ambiente
                  escolar;</p>
                <p>III - atividades de educação técnica oferecidas em outras instituições de ensino;</p>
                <p>IV - cursos oferecidos por centros ou programas ocupacionais;</p>
                <p>V - estudos realizados em instituições de ensino nacionais ou estrangeiras; e</p>
                <p>VI - educação a distância ou educação presencial mediada por tecnologias.” (NR)</p>
                <p>“Art. 44. .......................................................................</p>
                <p>.............................................................................................</p>
                <p>§ 3º O processo seletivo referido no inciso II do caput considerará exclusivamente as competências,
                  as habilidades e as expectativas de aprendizagem das áreas de conhecimento definidas na Base Nacional
                  Comum Curricular, observado o disposto nos incisos I a IV do caput do art. 36.” (NR)</p>
                <p>“Art. 61. .......................................................................</p>
                <p>.............................................................................................</p>
                <p>III - trabalhadores em educação, portadores de diploma de curso técnico ou superior em área
                  pedagógica ou afim; e</p>
                <p>IV - profissionais com notório saber reconhecido pelos respectivos sistemas de ensino para ministrar
                  conteúdos de áreas afins à sua formação para atender o disposto no inciso V do caput do art. 36.</p>
                <p>..................................................................................” (NR)</p>
                <p>“Art. 62. .......................................................................</p>
                <p>.............................................................................................</p>
                <p>§ 8º Os currículos dos cursos de formação de docentes terão por referência a Base Nacional Comum
                  Curricular.” (NR)</p>
                <p>Art. 2º A Lei nº 11.494, de 20 de junho de 2007, passa a vigorar com as seguintes alterações:</p>
                <p>“Art. 10. ........................................................................</p>
                <p>.............................................................................................</p>
                <p>XIV - formação técnica e profissional prevista no inciso V do caput do art. 36 da Lei nº 9.394, de 20
                  de dezembro de 1996;</p>
                <p>XV - segunda opção formativa de ensino médio, nos termos do § 10 do caput do art. 36 da Lei nº 9.394,
                  de 1996;</p>
                <p>XVI - educação especial;</p>
                <p>XVII - educação indígena e quilombola;</p>
                <p>XVIII - educação de jovens e adultos com avaliação no processo; e</p>
                <p>XIX - educação de jovens e adultos integrada à educação profissional de nível médio, com avaliação no
                  processo.</p>
                <p>...................................................................................” (NR)</p>
                <p>Art. 3º O disposto no § 8º do art. 62 da Lei nº 9.394, de 20 de dezembro de 1996, deverá ser
                  implementado no prazo de dois anos, contado da data de publicação desta Medida Provisória.</p>
                <p>Art. 4º O disposto no art. 26 e no art. 36 da Lei nº 9.394, de 1996, deverá ser implementado no
                  segundo ano letivo subsequente à data de publicação da Base Nacional Comum Curricular.</p>
                <p>Parágrafo único. O prazo de implementação previsto no caput será reduzido para o primeiro ano letivo
                  subsequente na hipótese de haver antecedência mínima de cento e oitenta dias entre a publicação da
                  Base Nacional Comum Curricular e o início do ano letivo.</p>
                <p>Art 5º Fica instituída, no âmbito do Ministério da Educação, a Política de Fomento à Implementação de
                  Escolas de Ensino Médio em Tempo Integral.</p>
                <p>Parágrafo único. A Política de Fomento de que trata o caput prevê o repasse de recursos do Ministério
                  da Educação para os Estados e para o Distrito Federal pelo prazo máximo de quatro anos por escola,
                  contado da data do início de sua implementação.</p>
                <p>Art. 6º São obrigatórias as transferências de recursos da União aos Estados e ao Distrito Federal,
                  desde que cumpridos os critérios de elegibilidade estabelecidos nesta Medida Provisória e no
                  regulamento, com a finalidade de prestar apoio financeiro para o atendimento em escolas de ensino
                  médio em tempo integral cadastradas no Censo Escolar da Educação Básica, e que:</p>
                <p>I - sejam escolas implantadas a partir da vigência desta Medida Provisória e atendam às condições
                  previstas em ato do Ministro de Educação; e</p>
                <p>II - tenham projeto político-pedagógico que obedeça ao disposto no art. 36 da Lei nº 9.394, de
                  1996.</p>
                <p>§ 1º A transferência de recursos de que trata o caput será realizada com base no número de matrículas
                  cadastradas pelos Estados e pelo Distrito Federal no Censo Escolar da Educação Básica, desde que
                  tenham sido atendidos, de forma cumulativa, os requisitos dos incisos I e II do caput.</p>
                <p>§ 2º A transferência de recursos será realizada anualmente, a partir de valor único por aluno,
                  respeitada a disponibilidade orçamentária para atendimento, a ser definida por ato do Ministro de
                  Estado da Educação.</p>
                <p>§ 3º Os recursos transferidos nos termos do caput poderão ser aplicados nas despesas de manutenção e
                  desenvolvimento das escolas participantes da Política de Fomento, podendo ser utilizados para
                  suplementação das expensas de merenda escolar e para aquelas previstas nos incisos I, II, III, VI e
                  VIII do caput do art. 70 da Lei nº 9.394, de 1996.</p>
                <p>§ 4º Na hipótese de o Distrito Federal ou de o Estado ter, no momento do repasse do apoio financeiro
                  suplementar de que trata o caput, saldo em conta de recursos repassados anteriormente, esse montante,
                  a ser verificado no último dia do mês anterior ao do repasse, será subtraído do valor a ser repassado
                  como apoio financeiro suplementar do exercício corrente.</p>
                <p>§ 5º Serão desconsiderados do desconto previsto no § 4º os recursos referentes ao apoio financeiro
                  suplementar, de que trata o caput, transferidos nos últimos doze meses.</p>
                <p>Art. 7º Os recursos de que trata o parágrafo único do art. 5º serão transferidos pelo Ministério da
                  Educação ao Fundo Nacional de Desenvolvimento da Educação - FNDE, independentemente de celebração de
                  termo específico.</p>
                <p>Art. 8º Ato do Ministro de Estado da Educação disporá sobre o acompanhamento da implementação do
                  apoio financeiro suplementar de que trata o parágrafo único do art. 5º.</p>
                <p>Art. 9º A transferência de recursos financeiros prevista no parágrafo único do art. 5º será efetivada
                  automaticamente pelo FNDE, dispensada a celebração de convênio, acordo, contrato ou instrumento
                  congênere, mediante depósitos em conta corrente específica.</p>
                <p>Parágrafo único. O Conselho Deliberativo do FNDE disporá, em ato próprio, sobre condições, critérios
                  operacionais de distribuição, repasse, execução e prestação de contas simplificada do apoio
                  financeiro.</p>
                <p>Art. 10. Os Estados e o Distrito Federal deverão fornecer, sempre que solicitados, a documentação
                  relativa à execução dos recursos recebidos com base no parágrafo único do art. 5º ao Tribunal de
                  Contas da União, ao FNDE, aos órgãos de controle interno do Poder Executivo federal e aos conselhos de
                  acompanhamento e controle social.</p>
                <p>Art. 11. O acompanhamento e o controle social sobre a transferência e a aplicação dos recursos
                  repassados com base no parágrafo único do art. 5º serão exercidos no âmbito dos Estados e do Distrito
                  Federal pelos respectivos conselhos previstos no art. 24 da Lei nº 11.494, de 20 de junho de 2007.</p>
                <p>Parágrafo único. Os conselhos a que se refere o caput analisarão as prestações de contas dos recursos
                  repassados no âmbito desta Medida Provisória, formularão parecer conclusivo acerca da aplicação desses
                  recursos e o encaminharão ao FNDE.</p>
                <p>Art. 12. Os recursos financeiros correspondentes ao apoio financeiro de que trata o parágrafo único
                  do art. 5º correrão à conta de dotação consignada nos orçamentos do FNDE e do Ministério da Educação,
                  observados os limites de movimentação, de empenho e de pagamento da programação orçamentária e
                  financeira anual.</p>
                <p>Art. 13. Fica revogada a Lei nº 11.161, de 5 de agosto de 2005.</p>
                <p>Art. 14. Esta Medida Provisória entra em vigor na data de sua publicação.</p>
                <p>Brasília, 22 de setembro de 2016; 195o da Independência e 128o da República.</p>
                <p>MICHEL TEMER</p>
                <p>José Mendonça Bezerra Filho</p>
                <p>Este texto não substitui o publicado no DOU de 23.9.2016 - Edição Extra</p>
                <p>*</p>

              </Panel>
            </Col>
          </Row>

          <Overlay show={true} target={idref('art24-punic')} placement="right">
            <Popover title="Incluído">
              Foi incluído blablabla, implica em etc etc
              <a href="#" className="pull-right">ler mais…</a>
            </Popover>
          </Overlay>

          <Overlay show={true} target={idref('art26-p1')} placement="right">
            <Popover title="Alterado">
              Foi incluído blablabla, que implica em etc etc
              <a href="#" className="pull-right">ler mais…</a>
            </Popover>
          </Overlay>
        </div>
    );
  }
}

export default App;

function idref(id) {
  return () => document.getElementById(id);
}