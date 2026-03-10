// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MenuFoldOutlinedSvg from '@colelab/icons-svg/es/asn/MenuFoldOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MenuFoldOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MenuFoldOutlinedSvg }, slots);
  },
});
