import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Valestra | The Luxe Drop</title>
        <meta name="description" content="This is not just a gift. It's a statement. Unlock the Luxe Drop — limited, refined, unforgettable." />
      </Head>

      <main style={{
        backgroundColor: '#0f0f0f',
        color: '#fff',
        fontFamily: 'serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <Image
          src="/valestra-phoenix.png"
          alt="Valestra Crest"
          width={100}
          height={100}
          priority
        />
        <h1 style={{ fontSize: '2.5rem', marginTop: '1.5rem' }}>
          This is not just a gift. It’s a statement.
        </h1>

        <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px' }}>
          Unlock limited bundles. Earn LuxePoints. Invite others. The Luxe Vault opens — but not for everyone.
        </p>

        <a
          href="/invite"
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            border: '1px solid #fff',
            borderRadius: '50px',
            textDecoration: 'none',
            color: '#fff',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#fff'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Unlock the Drop
        </a>
      </main>
    </>
  );
}

