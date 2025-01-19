"use client";

import { classed } from "@tw-classed/react";
import { useRouter } from "next/navigation";
import React from "react";

const Title = classed("h2", "text-xl md:text-3xl font-normalidad");
const Subtitle = classed("h3", "text-lg md:text-xl font-normalidad");
const Paragraph = classed("p", "text-lg font-thin");
const ListObject = classed("li", "text-lg font-thin");

export default function Dsgvo() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <main className="flex md:min-h-[800px] h-full w-full md:pb-0 justify-center bg-gradient-to-tl from-blue-dark to-blue-950 px-6 xl:px-0">
      <div className="container w-full lg:max-w-[1366px] flex flex-col mt-14 pb-24 md:pb-0 md:pt-0 gap-8 md:gap-0 mb-40 text-white">
        <h1 className="text-3xl md:text-5xl font-normalidad">
          Datenschutz&shy;erkl&auml;rung
        </h1>
        <br />
        <Title>1. Datenschutz auf einen Blick</Title>
        <br />
        <Subtitle>Allgemeine Hinweise</Subtitle> <br />
        <Paragraph>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </Paragraph>
        <br />
        <Subtitle>Datenerfassung auf dieser Website</Subtitle> <br />
        <h4>
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </h4>{" "}
        <br />
        <Paragraph>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </Paragraph>{" "}
        <br />
        <h4>Wie erfassen wir Ihre Daten?</h4> <br />
        <Paragraph>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </Paragraph>{" "}
        <br />
        <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4> <br />
        <Paragraph>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden. Sofern &uuml;ber die
          Website Vertr&auml;ge geschlossen oder angebahnt werden k&ouml;nnen,
          werden die &uuml;bermittelten Daten auch f&uuml;r Vertragsangebote,
          Bestellungen oder sonstige Auftragsanfragen verarbeitet.
        </Paragraph>{" "}
        <br />
        <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4> <br />
        <Paragraph>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </Paragraph>
        <br />
        <Subtitle>
          Analyse-Tools und Tools von Dritt&shy;anbietern
        </Subtitle>{" "}
        <br />
        <Paragraph>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
          der folgenden Datenschutzerkl&auml;rung.
        </Paragraph>
        <br />
        <Title>2. Hosting</Title>
        <br />
        <Paragraph>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </Paragraph>
        <br />
        <Subtitle>Externes Hosting</Subtitle> <br />
        <Paragraph>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters
          / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um
          IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die &uuml;ber eine Website generiert werden, handeln.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung
          gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6
          Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
          &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
          Cookies oder den Zugriff auf Informationen im Endger&auml;t des
          Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
          Die Einwilligung ist jederzeit widerrufbar.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten,
          wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist
          und unsere Weisungen in Bezug auf diese Daten befolgen.
        </Paragraph>{" "}
        <br />
        <Paragraph>Wir setzen folgende(n) Hoster ein:</Paragraph>
        <br />
        <Paragraph>Telekom</Paragraph>
        <br />
        <h4>Auftragsverarbeitung</h4> <br />
        <br />
        <Paragraph>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur
          Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es
          sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
          gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer
          Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
          DSGVO verarbeitet.
        </Paragraph>
        <br />
        <Title>3. Allgemeine Hinweise und Pflicht&shy;informationen</Title>{" "}
        <br />
        <Subtitle>Datenschutz</Subtitle> <br />
        <Paragraph>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerkl&auml;rung.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
          wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
          Zweck das geschieht.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
          aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht m&ouml;glich.
        </Paragraph>{" "}
        <br />
        <Subtitle>Hinweis zur verantwortlichen Stelle</Subtitle> <br />
        <Paragraph>
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Jesus, Sanchez Gonzalez
          <br />
          Inselkammerstr. 11, 82008 Unterhaching
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Telefon: 08961065300
          <br />
          E-Mail: info@ghv-web.de
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o. &Auml;.) entscheidet.
        </Paragraph>{" "}
        <br />
        <Subtitle>Speicherdauer</Subtitle> <br />
        <Paragraph>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
          Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
          gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen
          Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten
          haben (z.&nbsp;B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
          L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </Paragraph>{" "}
        <br />
        <Subtitle>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </Subtitle>{" "}
        <br />
        <Paragraph>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern
          Sie in die Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
          TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
          Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage
          des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
          Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung
          erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
          Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
          Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
          jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den
          folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        </Paragraph>{" "}
        <br />
        <Subtitle>Empfänger von personenbezogenen Daten</Subtitle> <br />
        <Paragraph>
          Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
          verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine
          &Uuml;bermittlung von personenbezogenen Daten an diese externen
          Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
          externe Stellen weiter, wenn dies im Rahmen einer
          Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
          Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6
          Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung
          wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
        </Paragraph>{" "}
        <br />
        <Subtitle>
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Subtitle>{" "}
        <br />
        <Paragraph>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        </Paragraph>{" "}
        <br />
        <Subtitle>
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          sowie gegen Direktwerbung (Art. 21 DSGVO)
        </Subtitle>{" "}
        <br />
        <Paragraph>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE
          SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG
          IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
          F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE
          JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH
          EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
          MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
          SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN,
          DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG
          VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </Paragraph>{" "}
        <br />
        <Paragraph>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </Paragraph>{" "}
        <br />
        <Subtitle>
          Beschwerde&shy;recht bei der zust&auml;ndigen
          Aufsichts&shy;beh&ouml;rde
        </Subtitle>{" "}
        <br />
        <Paragraph>
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </Paragraph>{" "}
        <br />
        <Subtitle>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</Subtitle>{" "}
        <br />
        <Paragraph>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </Paragraph>{" "}
        <br />
        <Subtitle>Auskunft, Berichtigung und L&ouml;schung</Subtitle> <br />
        <Paragraph>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        </Paragraph>{" "}
        <br />
        <Subtitle>Recht auf Einschr&auml;nkung der Verarbeitung</Subtitle>{" "}
        <br />
        <Paragraph>
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
          jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
          Verarbeitung besteht in folgenden F&auml;llen:
        </Paragraph>{" "}
        <br />
        <ul>
          {" "}
          <ListObject>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel
            Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der
            Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </ListObject>{" "}
          <ListObject>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten
            unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
            verlangen.
          </ListObject>{" "}
          <ListObject>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie
            sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
            Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
            L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </ListObject>{" "}
          <ListObject>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </ListObject>{" "}
        </ul>{" "}
        <br />
        <Paragraph>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
          eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
          Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Aus&uuml;bung oder Verteidigung von
          Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
          nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
          wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </Paragraph>{" "}
        <br />
        <Subtitle>SSL- bzw. TLS-Verschl&uuml;sselung</Subtitle> <br />
        <Paragraph>
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
          &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
          oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
          bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von
          &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen
          die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten
          mitgelesen werden.
        </Paragraph>{" "}
        <br />
        <Paragraph>
          Quelle:{" "}
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </Paragraph>{" "}
        <br />
      </div>

      <div
        onClick={handleClick}
        className="fixed rounded-full bottom-20 right-0 mr-8 flex justify-center items-center h-20 w-20 bg-slate-50/25 hover:bg-white cursor-pointer drop-shadow-lg rotate-180"
      >
        <svg
          width="31"
          height="16"
          viewBox="0 0 31 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
            fill="black"
          />
        </svg>
      </div>
    </main>
  );
}
