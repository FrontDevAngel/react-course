import React from 'react';

export const JournalScreen = () => {
    return (
        <div className='journal__container'>
            <header className='journal__header'>
                <div className='toolbar__header'>
                    <h3>Ángel</h3>
                    <button>Logout</button>
                </div>
                <div className='toolbar__content'>
                    <button>
                        Add <b>new</b> entry
                    </button>
                </div>
            </header>
            <main className='journal__main'>
                <h3>Main Content</h3>
            </main>
        </div>
    );
};
