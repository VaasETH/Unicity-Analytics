export default function Home() {
      return (
          <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1>Unicity Network Dashboard</h1>
                      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                              <h3>Network Status: <span style={{ color: 'green' }}>Active</span></h3>
                                      <p>Current Block Height: 12,450,892</p>
                                              <p>Total Transactions: 1.2M+</p>
                                                    </div>
                                                          <div style={{ marginTop: '20px' }}>
                                                                  <h3>Active Agents</h3>
                                                                          <ul>
                                                                                    <li>Unicity Guard - Running</li>
                                                                                              <li>Data Auditor - Synchronizing</li>
                                                                                                      </ul>
                                                                                                            </div>
                                                                                                                </main>
                                                                                                                  );
                                                                                                                  }