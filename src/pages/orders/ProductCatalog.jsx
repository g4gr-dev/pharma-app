import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './ProductCatalog.css';

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
        <div className="product-catalog-container">
            {/* Header */}
            <div className="catalog-header">
                <button onClick={() => navigate('/dashboard')} className="catalog-back-btn">
                    <span className="catalog-header-icon">←</span>
                </button>
                <span className="catalog-title">Farmacia Online</span>
                <button onClick={() => navigate('/orders/review')} className="catalog-cart-btn">
                    <span className="catalog-header-icon">🛒</span>
                </button>
            </div>

            <div className="catalog-content">

                {/* Search */}
                <div className="catalog-search-container">
                    <Input placeholder="Buscar medicamento, marca..." />
                </div>

                {/* Categories */}
                <div className="categories-scroll">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setCategory(cat.id)}
                            className={`category-pill ${category === cat.id ? 'active' : 'inactive'}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="product-grid">
                    {filteredProducts.map(prod => (
                        <div key={prod.id} className="card product-card">
                            <div className="product-image-container">
                                {prod.image}
                            </div>
                            <div>
                                <div className="product-info-brand">{prod.brand}</div>
                                <div className="product-info-name">{prod.name}</div>
                                <div className="product-info-price">${prod.price}</div>
                            </div>
                            <Button
                                variant="secondary"
                                className="add-product-btn"
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
