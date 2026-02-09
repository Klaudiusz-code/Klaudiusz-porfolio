import React from "react";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6 font-sans text-gray-700">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-20 rounded-[2.5rem] shadow-sm border border-gray-100">
        {/* Nagłówek */}
        <div className="mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Polityka Prywatności
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Niniejsza Polityka Prywatności dotyczy serwisu{" "}
            <strong>klaudiuszdev.pl</strong> W clear i prosty sposób wyjaśniam,
            jak przetwarzam Twoje dane wypełniając formularz na stronie.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            Administrator Danych Osobowych
          </h2>
          <p className="leading-relaxed mb-6 text-lg">
            Administratorem Twoich danych osobowych jest:
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <p className="font-bold text-2xl text-gray-900">
              Klaudiusz Adamaszek
            </p>
            <p className="text-gray-600 mt-2 text-lg">
              Właściciel marki Klaudiuszdev.pl
            </p>

            <p className="text-gray-600 mt-4">Email: klaudiusz.dev@gmail.com</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            Cel i podstawa przetwarzania danych
          </h2>
          <p className="leading-relaxed mb-6 text-lg">
            Przetwarzam Twoje dane wyłącznie w celu odpowiedzi na Twoje
            zapytanie wysłane przez formularz kontaktowy oraz przygotowania
            darmowego podglądu projektu.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">
              Podstawa prawna:
            </p>
            <p className="text-blue-800">
              Podstawą prawną przetwarzania jest{" "}
              <strong>art. 6 ust. 1 lit. b RODO</strong> (działania podejmowane
              na żądanie osoby, której dane dotyczą, przed zawarciem umowy) oraz
              wyraźna zgoda wynikająca z wypełnienia formularza.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            Odbiorcy Twoich danych (Zewnętrzni usługodawcy)
          </h2>
          <p className="leading-relaxed mb-6 text-lg">
            Ponieważ korzystam z zewnętrznych narzędzi technicznych do obsługi
            formularza, Twoje dane mogą być przekazywane podmiotom trzecim:
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl text-gray-900 mb-2">
                Formspree (Usługa formularzy)
              </h4>
              <p className="text-gray-600 mb-3">
                Twój formularz obsługuje usługa Formspree LLC. Oznacza to, że po
                kliknięciu &quot;Wyślij&quot;, Twoje dane (imię, email, treść
                wiadomości) są bezpiecznie przesyłane i tymczasowo przechowywane
                na serwerach Formspree w celu dostarczenia mi wiadomości.
              </p>
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
              >
                Przeczytaj Politykę Prywatności Formspree &rarr;
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            Jak długo przechowuję Twoje dane?
          </h2>
          <p className="leading-relaxed text-lg">
            Twoje dane przechowywane są wyłącznie przez czas niezbędny do
            realizacji Twojego zapytania (zazwyczaj kilka miesięcy). Po
            zakończeniu współpracy lub na Twoje żądanie dane są usuwane.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              5
            </span>
            Pliki Cookies (Ciasteczka)
          </h2>

          <p className="leading-relaxed text-lg mb-6">
            Serwis Klaudiuszdev.pl wykorzystuje pliki cookies w celu analizy
            ruchu na stronie.
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h4 className="font-bold text-xl text-gray-900 mb-2">
                Google Analytics (Analityka)
              </h4>
              <p className="text-gray-600 mb-3">
                Używam narzędzia Google Analytics do zbierania anonimowych
                informacji o tym, jak użytkownicy korzystają ze strony (np. ile
                osób ją odwiedza, z jakich urządzeń korzystają).
              </p>
              <p className="text-gray-600 mb-3">
                Narzędzie to wykorzystuje pliki cookies (m.in. <code>_ga</code>,{" "}
                <code>_gid</code>), które pozwalają na gromadzenie danych
                statystycznych.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-500 mt-4">
                <p className="font-bold text-gray-700">Pamiętaj:</p>
                <p>
                  Te pliki nie służą do profilowania Ciebie jako osoby ani do
                  celów marketingowych (reklam), lecz wyłącznie do poprawy
                  funkcjonalności i analizy ruchu.
                </p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl bg-gray-50">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Pliki techniczne (Formularze)
              </h4>
              <p className="text-gray-600 text-sm">
                Dodatkowo, strona używa cookies technicznych, które są niezbędne
                do działania formularza kontaktowego (obsługa przez Formspree).
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-600">
            W każdej chwili możesz zmienić ustawienia cookies w swojej
            przeglądarce internetowej lub zablokować je całkowicie, jednak może
            to wpłynąć na poprawne działanie niektórych funkcji strony.
          </p>
        </section>

        {/* Sekcja 6: Twoje prawa */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              6
            </span>
            Twoje uprawnienia
          </h2>
          <p className="leading-relaxed mb-6 text-lg">
            Ponieważ jesteśmy w kontakcie B2C, przysługują Ci pełne prawa
            zgodnie z RODO:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 text-lg">
            <li>
              Prawo do wycofania zgody w dowolnym momencie (wystarczy napisać
              maila).
            </li>
            <li>
              Prawo dostępu do treści swoich danych (chcesz wiedzieć, co o Tobie
              wiem?).
            </li>
            <li>Prawo do sprostowania danych (np. zmiana numeru telefonu).</li>
            <li>
              Prawo do usunięcia danych (&quot;prawo do bycia
              zapomnianym&quot;).
            </li>
            <li>
              Prawo do wniesienia skargi do UODO (Urzędu Ochrony Danych
              Osobowych).
            </li>
          </ul>
        </section>

        <div className="pt-10 border-t border-gray-200 mt-16 text-center">
          <p className="text-gray-500 mb-6">Masz pytania? Napisz do mnie.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Powrót na stronę główną
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
