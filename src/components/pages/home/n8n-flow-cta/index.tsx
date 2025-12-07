import styles from "./n8n-flow-cta.module.scss";
import { Icon } from "@iconify/react";

const N8nFlowCTA = () => {
  return (
    <section className={styles.n8nFlowSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Header Content */}
          <div className={styles.headerSection}>
            <div className={styles.badge}>
              <span>n8n Workflow</span>
            </div>
            
            <h2 className="section-title">
              Automate your business 
              <p> processes with <span className="highlight"> n8n workflows</span></p>
            </h2>
            
            <p className="section-subtitle">
              Connect your favorite tools and services to create powerful automated workflows. 
              From simple data transfers to complex business logic, n8n makes automation accessible to everyone.
            </p>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.primaryButton}>
              <span>Start Building Workflows</span>
              <div className={styles.buttonIcon}>
                <Icon icon="mdi:chevron-right" width="16" height="16" />
              </div>
            </a>
          </div>

          {/* Flow Visualization */}
          <div className={styles.flowVisualization}>
            {/* Flow Lines Background */}
            <div className={styles.flowLines}>
              <svg className={styles.flowSVG} viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
                {/* Input to Central - Multiple converging lines */}
                <path 
                  className={styles.flowPath} 
                  d="M80 80 Q400 120 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 120 Q400 140 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 160 Q400 160 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 200 Q400 180 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 240 Q400 200 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 280 Q400 220 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 320 Q400 240 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M80 360 Q400 260 450 180" 
                  stroke="url(#inputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                
                {/* Central to Output - Multiple diverging lines */}
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 120 920 80" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 140 920 120" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 160 920 160" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 180 920 200" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 200 920 240" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 220 920 280" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 240 920 320" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  className={styles.flowPath} 
                  d="M550 180 Q600 260 920 360" 
                  stroke="url(#outputGradient)" 
                  strokeWidth="3" 
                  fill="none"
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="inputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5da8ff" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#a66bff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#5da8ff" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a66bff" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#5da8ff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#a66bff" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Input Nodes */}
            <div className={styles.inputNodes}>
              <div className={styles.flowNode} data-type="input">
                <div className={styles.nodeIcon}>
                  <Icon icon="mdi:export" width="20" height="20" />
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="input">
                <div className={styles.nodeIcon}>
                  <Icon icon="mdi:email" width="20" height="20" />
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="input">
                <div className={styles.nodeIcon}>
                  <Icon icon="mdi:check-circle" width="20" height="20" />
                </div>
              </div>
            </div>

            {/* Central Processing Node */}
            <div className={styles.centralNode}>
              <div className={styles.processingIcon}>
                <Icon icon="mdi:loading" width="40" height="40" />
              </div>
              <div className={styles.n8nBranding}>
                <div className={styles.lightningIcon}>
                  <Icon icon="mdi:lightning-bolt" width="16" height="16" />
                </div>
                <div className={styles.brandText}>
                  <div className={styles.brandName}>n8n</div>
                  <div className={styles.brandSubtext}>
                    <div>Automation</div>
                    <div>anything</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Nodes */}
            <div className={styles.outputNodes}>
              <div className={styles.flowNode} data-type="output">
                <div className={styles.nodeIcon}>
                  <Icon icon="mdi:cube" width="20" height="20" />
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="output">
                <div className={styles.nodeIcon}>
                  <Icon icon="mdi:magnify" width="20" height="20" />
                </div>
              </div>
              
              <div className={styles.flowNode} data-type="output">
                <div className={styles.nodeIcon}>
                  <Icon icon="mdi:account" width="20" height="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8nFlowCTA;
