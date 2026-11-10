import React, { useState } from 'react';
import Head from 'next/head';

export default function ManutencaoModelaco() {
  const [tab, setTab] = useState('dash');
  const [pecas, setPecas] = useState([
    { id: 1, nome: 'Kit Guidão Drag Bar 22mm', codigo: 'PEC-089', qtd: 12 },
    { id: 2, nome: 'Óleo Hidráulico ISO VG 68', codigo: 'PEC-012', qtd: 45 }
  ]);
  const [nomePeca, setNomePeca] = useState('');
  const [qtdPeca, setQtdPeca] = useState('');

  const adicionarPeca = (e) => {
    e.preventDefault();
    if (!nomePeca || !qtdPeca) return;
    const nova = {
      id: Date.now(),
      nome: nomePeca,
      codigo: `PEC-${Math.floor(100 + Math.random() * 900)}`,
      qtd: parseInt(qtdPeca, 10)
    };
    setPecas([nova, ...pecas]);
    setNomePeca('');
    setQtdPeca('');
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#f3f4f6', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: '480px', margin: '0 auto', paddingBottom: '80px' }}>
      <Head>
        <title>Manutenção Modelaço - CMMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header style={{ padding: '24px 20px 16px', background: 'linear-gradient(180deg, #1a1a1a 0%, #121212 100%)', borderBottom: '1px solid #2a2a2a' }}>
        <h1 style={{ color: '#d97706', fontSize: '20px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>Manutenção Modelaço</h1>
        <p style={{ fontSize: '12px', color: '#9ca3af', margin: '2px 0 0 0' }}>Engenharia de Manutenção & Ativos</p>
      </header>

      <main style={{ padding: '20px' }}>
        {tab === 'dash' && (
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>Indicadores de Confiabilidade</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '12px 8px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600' }}>MTBF</span>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#d97706', margin: '6px 0 2px' }}>142</div>
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>Horas</span>
              </div>
              <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '12px 8px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600' }}>MTTR</span>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#d97706', margin: '6px 0 2px' }}>2.4</div>
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>Horas</span>
              </div>
              <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '12px 8px', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600' }}>MTTF</span>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#d97706', margin: '6px 0 2px' }}>180</div>
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>Horas</span>
              </div>
            </div>

            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>Programação Recente</h2>
            <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '16px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>Troca de Rolamento ROL-6204</h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>Torno CNC Romi • Preventiva</p>
              </div>
              <span style={{ backgroundColor: '#27272a', color: '#d97706', fontSize: '12px', fontWeight: '700', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(217, 119, 6, 0.2)' }}>HOJE</span>
            </div>
            <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '16px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>Inspeção de Vedações Gaxeta</h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>Prensa Hidráulica 150T • Preditiva</p>
              </div>
              <span style={{ backgroundColor: '#27272a', color: '#d97706', fontSize: '12px', fontWeight: '700', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(217, 119, 6, 0.2)' }}>AMANHÃ</span>
            </div>
          </div>
        )}

        {tab === 'pecas' && (
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>Incluir Peça / Item (Celular)</h2>
            <form onSubmit={adicionarPeca} style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '18px', marginBottom: '24px' }}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontWeight: '600' }}>Nome do Item / Peça</label>
                <input type="text" value={nomePeca} onChange={(e) => setNomePeca(e.target.value)} placeholder="Ex: Correia em V Profile A" style={{ width: '100%', backgroundColor: '#121212', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#f3f4f6', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontWeight: '600' }}>Quantidade</label>
                <input type="number" value={qtdPeca} onChange={(e) => setQtdPeca(e.target.value)} placeholder="0" style={{ width: '100%', backgroundColor: '#121212', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#f3f4f6', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ width: '100%', backgroundColor: '#d97706', color: '#000', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cadastrar Peça</button>
            </form>

            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>Catálogo em Estoque</h2>
            {pecas.map((p) => (
              <div key={p.id} style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '16px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>{p.nome}</h4>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#9ca3af' }}>Código: {p.codigo}</p>
                </div>
                <span style={{ backgroundColor: '#27272a', color: '#d97706', fontSize: '12px', fontWeight: '700', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(217, 119, 6, 0.2)' }}>{p.qtd} UNID</span>
              </div>
            ))}
          </div>
        )}

        {tab === 'prog' && (
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>Programar Manutenção</h2>
            <div style={{ backgroundColor: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '14px', padding: '18px' }}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontWeight: '600' }}>Equipamento / Máquina</label>
                <input type="text" placeholder="Ex: Torno CNC Romi Centur 20RV" style={{ width: '100%', backgroundColor: '#121212', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#f3f4f6', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontWeight: '600' }}>Tipo de Intervenção</label>
                <select style={{ width: '100%', backgroundColor: '#121212', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '12px', color: '#f3f4f6', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}>
                  <option>Preventiva</option>
                  <option>Corretiva</option>
                  <option>Preditiva / Inspeção</option>
                </select>
              </div>
              <button style={{ width: '100%', backgroundColor: '#d97706', color: '#000', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Agendar Serviço</button>
            </div>
          </div>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '480px', backgroundColor: '#161616', borderTop: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-around', padding: '10px 0', zIndex: 100 }}>
        <button onClick={() => setTab('dash')} style={{ background: 'none', border: 'none', color: tab === 'dash' ? '#d97706' : '#9ca3af', fontSize: '11px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', width: '33%', fontWeight: tab === 'dash' ? '700' : 'normal' }}>
          <span style={{ fontSize: '18px' }}>📊</span>
          <span>Início</span>
        </button>
        <button onClick={() => setTab('pecas')} style={{ background: 'none', border: 'none', color: tab === 'pecas' ? '#d97706' : '#9ca3af', fontSize: '11px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', width: '33%', fontWeight: tab === 'pecas' ? '700' : 'normal' }}>
          <span style={{ fontSize: '18px' }}>🔧</span>
          <span>Peças</span>
        </button>
        <button onClick={() => setTab('prog')} style={{ background: 'none', border: 'none', color: tab === 'prog' ? '#d97706' : '#9ca3af', fontSize: '11px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', width: '33%', fontWeight: tab === 'prog' ? '700' : 'normal' }}>
          <span style={{ fontSize: '18px' }}>📅</span>
          <span>Agenda</span>
        </button>
      </nav>
    </div>
  );
}
