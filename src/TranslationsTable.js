import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Translations from './Translations';

function TranslationsTable() {
    const translations = Translations();

    return (
        <table>
        <TableHeader />
        <tbody>
            {translations.map((term, index) => (
            <TableRow key={index} english={term.english} latvian={term.latvian} />
            ))}
        </tbody>
        </table>
    );
}

export default TranslationsTable;