import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Valestra | The Luxe Drop</title>
        <meta name="description" content="Unlock limited bundles. Earn LuxePoints. Invite others. The Luxe Vault opens — but not for everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        background: '#0d0d0d',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <img 
          src="/logo.png" 
          alt="Valestra Crest" 
          style={{ width: '80px', marginBottom: '2rem', filter: 'brightness(0.95)' }}
        />

        <h1 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
          This is not just a gift. It’s a statement.
        </h1>

        <p style={{ maxWidth: '600px', fontSize: '1rem', opacity: 0.85, marginBottom: '2rem' }}>
          Unlock limited bundles. Earn LuxePoints. Invite others. The Luxe Vault opens — but not for everyone.
        </p>

        <button style={{
          background: 'transparent',
          color: '#fff',
          border: '1px solid #fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#fff', e.currentTarget.style.color = '#000')}
        onMouseOut={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#fff')}
        >
          Unlock the Drop
        </button>
      </main>
    </>
  );
}
