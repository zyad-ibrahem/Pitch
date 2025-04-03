(() => {
    // Canvas setup
    const canvas = document.getElementById('pitch') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let zoom = 1.25;
    // Set better dimensions for the canvas
    canvas.width = 500 * zoom;
    canvas.height = 700 * zoom;

    // Positions Data
    const positions = [
        {
            name: "GK",
            SX: 100 * zoom,
            EX: 400 * zoom,
            SY: canvas.height - 50 * zoom,
            EY: canvas.height - 5 * zoom,
            childern: [],
            color: 0xFFFF00
        },
        {
            name: "SW",
            SX: 100 * zoom,
            EX: 400 * zoom,
            SY: canvas.height - 110 * zoom,
            EY: canvas.height - 50 * zoom,
            childern: []
        },
        {
            name: "CB",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 200 * zoom,
            EY: canvas.height - 110 * zoom,
            childern: [
                {
                    name: "LCB",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "CB",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                },
                {
                    name: "RCB",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                },
            ]
        },
        {
            name: "LBD",
            SX: 5 * zoom,
            EX: 100 * zoom,
            SY: canvas.height - 110 * zoom,
            EY: canvas.height - 5 * zoom,
            childern: []
        },
        {
            name: "RBD",
            SX: 400 * zoom,
            EX: 495 * zoom,
            SY: canvas.height - 110 * zoom,
            EY: canvas.height - 5 * zoom,
            childern: []
        },
        {
            name: "LB",
            SX: 5 * zoom,
            EX: 125 * zoom,
            SY: canvas.height - 200 * zoom,
            EY: canvas.height - 110 * zoom,
            childern: []
        },
        {
            name: "RB",
            SX: 375 * zoom,
            EX: 495 * zoom,
            SY: canvas.height - 200 * zoom,
            EY: canvas.height - 110 * zoom,
            childern: []
        },
        {
            name: "LWB",
            SX: 5 * zoom,
            EX: 125 * zoom,
            SY: canvas.height - 280 * zoom,
            EY: canvas.height - 200 * zoom,
            childern: []
        },
        {
            name: "RWB",
            SX: 375 * zoom,
            EX: 495 * zoom,
            SY: canvas.height - 280 * zoom,
            EY: canvas.height - 200 * zoom,
            childern: []
        },
        {
            name: "DM",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 280 * zoom,
            EY: canvas.height - 200 * zoom,
            childern: [
                {
                    name: "LDM",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "CDM",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                },
                {
                    name: "RDM",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                }
            ]
        },
        {
            name: "CM",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 380 * zoom,
            EY: canvas.height - 280 * zoom,
            childern: [
                {
                    name: "LCM",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "CM",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                },
                {
                    name: "RCM",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                }
            ]
        },
        {
            name: "LM",
            SX: 5 * zoom,
            EX: 125 * zoom,
            SY: canvas.height - 420 * zoom,
            EY: canvas.height - 280 * zoom,
            childern: []
        },
        {
            name: "RM",
            SX: 375 * zoom,
            EX: 495 * zoom,
            SY: canvas.height - 420 * zoom,
            EY: canvas.height - 280 * zoom,
            childern: []
        },
        {
            name: "AM",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 440 * zoom,
            EY: canvas.height - 380 * zoom,
            childern: [
                {
                    name: "LAM",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "CAM",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                },
                {
                    name: "RAM",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                }
            ]
        },
        {
            name: "SS",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 510 * zoom,
            EY: canvas.height - 440 * zoom,
            childern: [
                {
                    name: "LSS",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "RSS",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                },
                {
                    name: "SS",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                }
            ]
        },
        {
            name: "CF",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 590 * zoom,
            EY: canvas.height - 510 * zoom,
            childern: [
                {
                    name: "LF",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "CF",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                },
                {
                    name: "RF",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                }
            ]
        },
        {
            name: "LW",
            SX: 5 * zoom,
            EX: 125 * zoom,
            SY: canvas.height - 600 * zoom,
            EY: canvas.height - 420 * zoom,
            childern: []
        },
        {
            name: "RW",
            SX: 375 * zoom,
            EX: 495 * zoom,
            SY: canvas.height - 600 * zoom,
            EY: canvas.height - 420 * zoom,
            childern: []
        },
        {
            name: "LWA",
            SX: 5 * zoom,
            EX: 125 * zoom,
            SY: canvas.height - 695 * zoom,
            EY: canvas.height - 600 * zoom,
            childern: []
        },
        {
            name: "RWA",
            SX: 375 * zoom,
            EX: 495 * zoom,
            SY: canvas.height - 695 * zoom,
            EY: canvas.height - 600 * zoom,
            childern: []
        },
        {
            name: "ST",
            SX: 125 * zoom,
            EX: 375 * zoom,
            SY: canvas.height - 695 * zoom,
            EY: canvas.height - 590 * zoom,
            childern: [
                {
                    name: "LS",
                    SX: 125 * zoom,
                    EX: 200 * zoom,
                },
                {
                    name: "ST",
                    SX: 200 * zoom,
                    EX: 300 * zoom,
                },
                {
                    name: "RS",
                    SX: 300 * zoom,
                    EX: 375 * zoom,
                }
            ]
        }
    ];

    // players data
    let players = [
        {
            currPosition: "GK",
            defaultPosition: "GK",
            x: canvas.width / 2,
            y: canvas.height - 40 * zoom
        },
        {
            currPosition: "CB",
            defaultPosition: "CB",
            x: canvas.width / 2 + 70 * zoom,
            y: canvas.height - 170 * zoom
        },
        {
            currPosition: "CB",
            defaultPosition: "CB",
            x: canvas.width / 2 - 70 * zoom,
            y: canvas.height - 170 * zoom
        },
        {
            currPosition: "RB",
            defaultPosition: "RB",
            x: canvas.width / 2 + 200 * zoom,
            y: canvas.height - 180 * zoom
        },
        {
            currPosition: "LB",
            defaultPosition: "LB",
            x: canvas.width / 2 - 200 * zoom,
            y: canvas.height - 180 * zoom
        },
        {
            currPosition: "CM",
            defaultPosition: "CM",
            x: canvas.width / 2 + 90 * zoom,
            y: canvas.height - 350 * zoom
        },
        {
            currPosition: "CM",
            defaultPosition: "CM",
            x: canvas.width / 2 - 90 * zoom,
            y: canvas.height - 350 * zoom
        },
        {
            currPosition: "CAM",
            defaultPosition: "CAM",
            x: canvas.width / 2,
            y: canvas.height - 420 * zoom
        },
        {
            currPosition: "RW",
            defaultPosition: "RW",
            x: canvas.width / 2 + 180 * zoom,
            y: canvas.height - 520 * zoom
        },
        {
            currPosition: "LW",
            defaultPosition: "LW",
            x: canvas.width / 2 - 180 * zoom,
            y: canvas.height - 520 * zoom
        },
        {
            currPosition: "CF",
            defaultPosition: "CF",
            x: canvas.width / 2,
            y: canvas.height - 560 * zoom
        },
    ]

    // Calculate relative dimensions based on canvas size
    const pitchDimensions = {
        width: canvas.width,
        height: canvas.height,
        goalWidth: canvas.width * 0.15,
        goalDepth: canvas.height * 0.02,
        penaltyBoxWidth: canvas.width * 0.65,
        penaltyBoxDepth: canvas.height * 0.18,
        goalBoxWidth: canvas.width * 0.3,
        goalBoxDepth: canvas.height * 0.06,
        centerCircleRadius: Math.min(canvas.width, canvas.height) * 0.1,
        cornerArcRadius: Math.min(canvas.width, canvas.height) * 0.02,
        penaltyArcRadius: Math.min(canvas.width, canvas.height) * 0.1,
        penaltySpotDistance: canvas.height * 0.12,
        lineWidth: Math.max(1, Math.min(canvas.width, canvas.height) * 0.005)
    };

    // Draw the pitch with enhanced visuals
    const pitch = {
        draw(): void {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Outer field with gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#0a5c0a");
            gradient.addColorStop(0.5, "#0e8b0e");
            gradient.addColorStop(1, "#0a5c0a");

            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.lineWidth = pitchDimensions.lineWidth;
            ctx.strokeStyle = "#FFF";
            ctx.stroke();
            ctx.closePath();

            // Add subtle texture pattern (vertical stripes)
            this.drawGrassPattern();

            // Set line properties for field markings
            ctx.lineWidth = pitchDimensions.lineWidth;
            ctx.strokeStyle = "#FFF";
            ctx.fillStyle = "#FFF";

            // Mid line
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();
            ctx.closePath();

            // Center circle
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                pitchDimensions.centerCircleRadius,
                0,
                2 * Math.PI,
                false
            );
            ctx.stroke();
            ctx.closePath();

            // Center spot
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                pitchDimensions.lineWidth * 1.5,
                0,
                2 * Math.PI,
                false
            );
            ctx.fill();
            ctx.closePath();

            // Top penalty box
            ctx.beginPath();
            ctx.rect(
                (canvas.width - pitchDimensions.penaltyBoxWidth) / 2,
                0,
                pitchDimensions.penaltyBoxWidth,
                pitchDimensions.penaltyBoxDepth
            );
            ctx.stroke();
            ctx.closePath();

            // Top goal box
            ctx.beginPath();
            ctx.rect(
                (canvas.width - pitchDimensions.goalBoxWidth) / 2,
                0,
                pitchDimensions.goalBoxWidth,
                pitchDimensions.goalBoxDepth
            );
            ctx.stroke();
            ctx.closePath();

            // Top goal 
            ctx.beginPath();
            ctx.moveTo((canvas.width / 2) - (pitchDimensions.goalWidth / 2), pitchDimensions.lineWidth / 2);
            ctx.lineTo((canvas.width / 2) + (pitchDimensions.goalWidth / 2), pitchDimensions.lineWidth / 2);
            ctx.lineWidth = pitchDimensions.lineWidth * 5;
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = pitchDimensions.lineWidth;

            // Top penalty spot
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                pitchDimensions.penaltySpotDistance,
                pitchDimensions.lineWidth * 1.5,
                0,
                2 * Math.PI,
                true
            );
            ctx.fill();
            ctx.closePath();

            // Top penalty arc
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                pitchDimensions.penaltySpotDistance + pitchDimensions.penaltyBoxDepth / 3 + 1,
                pitchDimensions.penaltyBoxWidth / 5,
                0,
                Math.PI,
                false
            );
            ctx.stroke();
            ctx.closePath();

            // Bottom penalty arc
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                canvas.height - pitchDimensions.penaltySpotDistance - pitchDimensions.penaltyBoxDepth / 3 - 1,
                pitchDimensions.penaltyBoxWidth / 5,
                0,
                Math.PI,
                true
            );
            ctx.stroke();
            ctx.closePath();


            // Bottom penalty box
            ctx.beginPath();
            ctx.rect(
                (canvas.width - pitchDimensions.penaltyBoxWidth) / 2,
                canvas.height - pitchDimensions.penaltyBoxDepth,
                pitchDimensions.penaltyBoxWidth,
                pitchDimensions.penaltyBoxDepth
            );
            ctx.stroke();
            ctx.closePath();

            // Bottom goal box
            ctx.beginPath();
            ctx.rect(
                (canvas.width - pitchDimensions.goalBoxWidth) / 2,
                canvas.height - pitchDimensions.goalBoxDepth,
                pitchDimensions.goalBoxWidth,
                pitchDimensions.goalBoxDepth
            );
            ctx.stroke();
            ctx.closePath();

            // Bottom goal 
            ctx.beginPath();
            ctx.moveTo((canvas.width / 2) - (pitchDimensions.goalWidth / 2), canvas.height - (pitchDimensions.lineWidth / 2));
            ctx.lineTo((canvas.width / 2) + (pitchDimensions.goalWidth / 2), canvas.height - (pitchDimensions.lineWidth / 2));
            ctx.lineWidth = pitchDimensions.lineWidth * 5;
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = pitchDimensions.lineWidth;

            // Bottom penalty spot
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                canvas.height - pitchDimensions.penaltySpotDistance,
                pitchDimensions.lineWidth * 1.5,
                0,
                2 * Math.PI,
                true
            );
            ctx.fill();
            ctx.closePath();

            // Corner arcs
            // Top left corner
            ctx.beginPath();
            ctx.arc(0, 0, pitchDimensions.cornerArcRadius, 0, 0.5 * Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            // Top right corner
            ctx.beginPath();
            ctx.arc(canvas.width, 0, pitchDimensions.cornerArcRadius, 0.5 * Math.PI, Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            // Bottom right corner
            ctx.beginPath();
            ctx.arc(canvas.width, canvas.height, pitchDimensions.cornerArcRadius, Math.PI, 1.5 * Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            // Bottom left corner
            ctx.beginPath();
            ctx.arc(0, canvas.height, pitchDimensions.cornerArcRadius, 1.5 * Math.PI, 2 * Math.PI, false);
            ctx.stroke();
            ctx.closePath()

            for (let index = 0; index < positions.length; index++) {
                const { name, SX, EX, SY, EY, childern } = positions[index];

                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.setLineDash([10, 5]);
                ctx.lineDashOffset = 0;
                ctx.beginPath();
                ctx.rect(SX, SY, Math.abs(EX - SX), Math.abs(EY - SY));
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "bold 24px Arial";

                if (childern && childern.length > 0) {
                    for (let childIndex = 0; childIndex < childern.length; childIndex++) {
                        const { name: childName, SX: childSX, EX: childEX } = childern[childIndex];
                        const { SY: childSY, EY: childEY } = positions[index]


                        ctx.strokeStyle = "black";
                        ctx.lineWidth = 2;
                        ctx.setLineDash([10, 5]);
                        ctx.lineDashOffset = 0;
                        ctx.beginPath();
                        ctx.rect(childSX, childSY, Math.abs(childEX - childSX), Math.abs(childEY - childSY));
                        ctx.stroke();
                        ctx.setLineDash([]);

                        ctx.fillStyle = "black";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.font = "bold 20px Arial";
                        ctx.fillText(childName, (childSX + childEX) / 2, (childSY + childEY) / 2);
                    }
                } else ctx.fillText(name, (SX + EX) / 2, (SY + EY) / 2);
            }

            for (let i = 0; i < players.length; i++) {
                const player = players[i]
                ctx.textBaseline = "alphabetic";
                let color: number = 0x000000;

                for (let i = 0; i < positions.length; i++) {
                    if (positions[i].name == player.currPosition) {
                        color = positions[i].color ?? 0x000000
                    }
                }

                function colorstr(c: number) {
                    let hex = c.toString(16)
                    while (hex.length < 6) hex = "0" + hex
                    return `#${hex}`
                }

                function darkenColor(hex: number, percent: number) {
                    let r = (hex >> 16) & 0xff
                    let g = (hex >> 8) & 0xff
                    let b = hex & 0xff

                    r = Math.round(r * (1 - percent))
                    g = Math.round(g * (1 - percent))
                    b = Math.round(b * (1 - percent))

                    return (r << 16) | (g << 8) | b
                }

                ctx.beginPath()
                ctx.strokeStyle = colorstr(color)
                let lineWidth = ctx.lineWidth = 60
                ctx.arc(player.x, player.y, 1, 0, 2 * Math.PI)
                ctx.stroke()

                ctx.beginPath()
                ctx.strokeStyle = colorstr(darkenColor(color, 0.3))
                ctx.lineWidth = 5
                ctx.arc(player.x, player.y, lineWidth / 2, 0, 2 * Math.PI)
                ctx.stroke()

                ctx.fillStyle = "black"
                ctx.textAlign = "center"
                ctx.font = "bold 24px Arial"
                ctx.fillText(String(player.currPosition), player.x, player.y + 8)
            }



        },

        // Draw grass texture pattern
        drawGrassPattern(): void {
            ctx.save();
            ctx.globalAlpha = 0.1;

            // Draw vertical stripes
            const stripeWidth = canvas.width / 6;
            const stripeHeight = canvas.height / 8;
            for (let i = 0; i < canvas.width; i += stripeWidth * 2) {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(i, 0, stripeWidth, canvas.height);
            }
            for (let i = 0; i < canvas.height; i += stripeHeight * 2) {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, i, canvas.width, stripeHeight);
            }

            ctx.restore();
        }
    };

    // Initialize and render the pitch
    const initialize = (): void => {
        pitch.draw();

        // Add resize handler to maintain proportions
        window.addEventListener('resize', () => {
            pitch.draw();
        });
    };

    // Start the rendering
    initialize();
})();
