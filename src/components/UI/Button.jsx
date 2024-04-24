export default function Button({children,textOnly, className, type,...props}){
    let cssClass= textOnly ? 'text-button':'button';
    cssClass += ' '+ className;
    return (<button className={cssClass} {...props}>{children}</button>);
}
//the main purpose is for diffrent style, you can make sttyle where you invoke this components.
