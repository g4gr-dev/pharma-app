import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const ProductCatalog = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('all');

    // Mock Data
    const products = [
        { id: 1, name: 'Ibuprofeno 400mg', brand: 'Actron', price: 1500, category: 'pain', image: '💊' },
        { id: 2, name: 'Paracetamol 500mg', brand: 'Tafirol', price: 1200, category: 'pain', image: '💊' },
        { id: 3, name: 'Jarabe para Tos', brand: 'Vic', price: 2500, category: 'flu', image: '🧪' },
        { id: 4, name: 'Alcohol en Gel', brand: 'Farmacity', price: 800, category: 'hygiene', image: '🧴' },
        { id: 5, name: 'Curitas', brand: 'Band-Aid', price: 500, category: 'firstaid', image: '🩹' },
        { id: 6, name: 'Vitamina C', brand: 'Redoxon', price: 3000, category: 'supplements', image: '🍊' },
    ];

    const categories = [
        { id: 'all', label: 'Todos' },
        { id: 'pain', label: 'Dolor' },
        { id: 'flu', label: 'Gripe' },
        { id: 'hygiene', label: 'Higiene' },
        { id: 'supplements', label: 'Vitaminas' },
    ];

    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Farmacia Online</span>
                <button onClick={() => navigate('/orders/review')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>🛒</span>
                </button>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {/* Search */}
                <div style={{ marginBottom: '24px' }}>
                    <Input placeholder="Buscar medicamento, marca..." />
                </div>

                {/* Categories */}
                <div className="flex gap-sm" style={{ marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setCategory(cat.id)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: '1px solid var(--color-primary)',
                                backgroundColor: category === cat.id ? 'var(--color-primary)' : 'white',
                                color: category === cat.id ? 'white' : 'var(--color-primary)',
                                fontSize: '12px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {filteredProducts.map(prod => (
                        <div key={prod.id} className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ fontSize: '40px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '16px' }}>
                                {prod.image}
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#666' }}>{prod.brand}</div>
                                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>{prod.name}</div>
                                <div style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>${prod.price}</div>
                            </div>
                            <Button
                                variant="secondary"
                                style={{ fontSize: '12px', padding: '8px', marginTop: 'auto' }}
                                onClick={() => navigate('/orders/review')} // Short circuit for demo
                            >
                                Agregar
                            </Button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductCatalog;
