import {classNames} from "shared/lib/classNames";
import cl from "./LangSwitcher.module.scss";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ILangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' :'ru');
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cl.langSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t('sidebar.lng')}
        </Button>
    );
};