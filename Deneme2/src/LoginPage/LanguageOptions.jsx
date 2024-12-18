import React from 'react';


const LanguageOptions = () => {
    const languages = [
        { lang: 'Türkçe', id: 0 },
        { lang: 'İngilizce', id: 1 },
        { lang: 'Romence', id: 2 },
        { lang: 'Rusça', id: 3 },
        { lang: 'Almanca', id: 4 },
        { lang: 'Azerice', id: 5 },
        { lang: 'Arapça', id: 6 },
    ];

    return (
        <div className="text-top mt-4 text-center font-size-20">
            {languages.map(language => (
                <a key={language.id} href={`default.aspx?sid=&lang=${language.id}`} className="text-muted me-2" title={language.lang}>
                    {language.lang}
                </a>
            ))}

        </div>
    );
};

export default LanguageOptions;
