import { Container, Sprite } from "@pixi/react";
import { Texture } from "pixi.js";
import { PropsWithChildren, useMemo } from "react";
import backgroundAsset from "../../../assets/space-stars.jpg";

interface IMainContainerProps {
    canvasSize: { width: number; height: number };
}

export const MainContainer = ({
    canvasSize,
    children,
}: PropsWithChildren<IMainContainerProps>) => {
    const backgroundTexture = useMemo(() => Texture.from(backgroundAsset), []);

    return (
        <Container>
            <Sprite
                texture={backgroundTexture}
                width={canvasSize.width}
                height={canvasSize.height}
            />
            {children}
        </Container>
    );
};
